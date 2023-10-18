import {
    COLON_CHAR,
    LINE_FEED_CHAR,
    NUMBER_SIGN_CHAR,
    EQUALS_SIGN_CHAR,
    COMMA_CHAR,
    QUOTATION_MARK_CHAR,
    TAG_TYPE_ID,
    TAG_ATTRIBUTE_LIST_TYPE_ID,
    TAG_ATTRIBUTE_LIST_MULTIPLE_TYPE_ID,
    NONE_MEDIA_TYPE_ID,
    MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID,
    MEDIA_SEGMENT_APPLY_ALL_MEDIA_TYPE_ID,
    VARIANT_STREAM_APPLY_NEXT_MEDIA_TYPE_ID,
} from '../const';

// let lastDataChunk = null;

export const parser = (data = '', schema = {}) => {
    // TODO
    // if (lastDataChunk !== null) {
    //     data = lastDataChunk + data;
    //     lastDataChunk = null;
    // }

    let char;
    let char2;

    let row = 0;

    let lineStartPos = 0;
    let colonCharPos = -1;

    let tag;
    let tagName;

    const length = data.length - 1;

    let uriBufferApplyNext = {};
    const uriBufferApplyAll = {};

    let uriBufferRecordTarget;

    for (let idx = 0; idx <= length; idx++) {
        char = data[idx];

        if (
            char === LINE_FEED_CHAR ||
            idx === length
        ) {
            if (colonCharPos === -1) {
                // tag with no value parsing:
                // #EXTM3U\n

                tagName = data.slice(lineStartPos, idx === length ? idx + 1 : idx);
                tag = schema[tagName];

                if (
                    tag !== undefined &&
                    tag.type === TAG_TYPE_ID
                ) {
                    tag.data.push({
                        value: true,
                        row: row,
                        col: 0,
                    });

                    if (tag.mediaType === NONE_MEDIA_TYPE_ID) {
                        schema.playlist[tagName] = true;
                        uriBufferRecordTarget = undefined;
                    } else if (tag.mediaType === MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID) {
                        uriBufferApplyNext[tagName] = true;
                        uriBufferRecordTarget = schema.mediaSegments;
                    } else if (tag.mediaType === MEDIA_SEGMENT_APPLY_ALL_MEDIA_TYPE_ID) {
                        uriBufferApplyAll[tagName] = true;
                        uriBufferRecordTarget = schema.mediaSegments;
                    } else if (tag.mediaType === VARIANT_STREAM_APPLY_NEXT_MEDIA_TYPE_ID) {
                        uriBufferApplyNext[tagName] = true;
                        uriBufferRecordTarget = schema.variantStreams;
                    }
                }

                // URI final parsing:
                if (
                    tagName[0] !== NUMBER_SIGN_CHAR &&
                    tagName.trim().length !== 0 &&
                    uriBufferRecordTarget !== undefined
                ) {
                    uriBufferRecordTarget.push({
                        ...uriBufferApplyNext,
                        ...uriBufferApplyAll,
                        URI: tagName,
                    });

                    // uriBufferRecordTarget = undefined;

                    uriBufferApplyNext = {};
                }
            }

            lineStartPos = idx + 1;
            colonCharPos = -1;

            row++;

            continue;
        } else if (char === COLON_CHAR) {
            if (colonCharPos === -1) {
                // tag with single value parsing:
                // #EXT-X-VERSION:9\n
                //
                // or
                //
                // attribute list parsing:
                // #EXT-X-DEFINE:NAME="TEST",VALUE="22"\n

                colonCharPos = idx;

                tagName = data.slice(lineStartPos, colonCharPos);
                tag = schema[tagName];

                if (tag !== undefined) {
                    if (tag.type === TAG_TYPE_ID) {
                        // value parsing and recording with main loop iteration
                        for (let idx2 = idx + 1; idx2 <= length; idx2++) {
                            char2 = data[idx2];

                            idx++;

                            if (
                                char2 === LINE_FEED_CHAR ||
                                idx2 === length
                            ) {
                                const value = data.slice(
                                    colonCharPos + 1,
                                    idx2 === length ? idx + 1 : idx,
                                );

                                const valueForResult = tag.parse(value);

                                tag.data.push({
                                    value: value,
                                    row: row,
                                    col: 0,
                                });

                                if (tag.mediaType === NONE_MEDIA_TYPE_ID) {
                                    schema.playlist[tagName] = valueForResult;
                                    uriBufferRecordTarget = undefined;
                                } else if (tag.mediaType === MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID) {
                                    uriBufferApplyNext[tagName] = valueForResult;
                                    uriBufferRecordTarget = schema.mediaSegments;
                                } else if (tag.mediaType === MEDIA_SEGMENT_APPLY_ALL_MEDIA_TYPE_ID) {
                                    uriBufferApplyAll[tagName] = valueForResult;
                                    uriBufferRecordTarget = schema.mediaSegments;
                                } else if (tag.mediaType === VARIANT_STREAM_APPLY_NEXT_MEDIA_TYPE_ID) {
                                    uriBufferApplyNext[tagName] = valueForResult;
                                    uriBufferRecordTarget = schema.variantStreams;
                                }

                                break;
                            }
                        }

                        lineStartPos = idx + 1;
                        colonCharPos = -1;
            
                        row++;
                    } else if (
                        tag.type === TAG_ATTRIBUTE_LIST_TYPE_ID ||
                        tag.type === TAG_ATTRIBUTE_LIST_MULTIPLE_TYPE_ID
                    ) {
                        const attributesList = {
                            value: null,
                            row: row,
                            col: 0,
                        };

                        const attributesListForResult = {};

                        let attributeNameStartPos = idx + 1;
                        let attributeValueStartPos = -1;
                        let attributeName = null;
                        let attributeValue = null;

                        let col = -1;

                        let startPosition = idx + 1;

                        let isQuotationMarkOpened = false;

                        // attribute list object formation with main loop iteration
                        for (let idx2 = startPosition; idx2 <= length; idx2++) {
                            char2 = data[idx2];

                            idx++;
            
                            if (char2 === EQUALS_SIGN_CHAR) {
                                if (attributeName === null) {
                                    attributeName = data.slice(attributeNameStartPos, idx2);

                                    col = tagName.length + 1 + idx2 - startPosition - attributeName.length;

                                    attributeValueStartPos = idx2 + 1;
                                    attributeValue = null;

                                    if (data[attributeValueStartPos] === QUOTATION_MARK_CHAR) {
                                        isQuotationMarkOpened = true;
                                    }
                                }
                            } else if (
                                char2 === COMMA_CHAR ||
                                char2 === LINE_FEED_CHAR ||
                                idx2 === length
                            ) {
                                if (idx2 === length) {
                                    if (
                                        char2 === QUOTATION_MARK_CHAR &&
                                        isQuotationMarkOpened === true
                                    ) {
                                        isQuotationMarkOpened = false;
                                    }
                                }

                                if (data[idx2 - 1] === QUOTATION_MARK_CHAR) {
                                    isQuotationMarkOpened = false;
                                }

                                if (attributeValue === null && isQuotationMarkOpened === false) {
                                    if (tag[attributeName] !== undefined) {
                                        attributeValue = data.slice(
                                            attributeValueStartPos,
                                            char2 === COMMA_CHAR || char2 === LINE_FEED_CHAR
                                                ? idx2
                                                : idx2 + 1
                                        );
    
                                        attributesList[attributeName] = {
                                            value: attributeValue,
                                            row: row,
                                            col: col,
                                        };

                                        attributesListForResult[attributeName] = tag[attributeName].parse(
                                            attributeValue
                                        );
                                    }

                                    attributeNameStartPos = idx2 + 1;
                                    attributeName = null;
                                }

                                if (char2 === LINE_FEED_CHAR || idx2 === length) {
                                    isQuotationMarkOpened = false;
                                    break;
                                }
                            }
                        }

                        schema[tagName].data.push(attributesList);

                        // attribute list object recording

                        let recordTarget = schema.playlist;

                        if (tag.mediaType === MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID) {
                            recordTarget = uriBufferApplyNext;
                            uriBufferRecordTarget = schema.mediaSegments;
                        } else if (tag.mediaType === MEDIA_SEGMENT_APPLY_ALL_MEDIA_TYPE_ID) {
                            recordTarget = uriBufferApplyAll;
                            uriBufferRecordTarget = schema.mediaSegments;
                        } else if (tag.mediaType === VARIANT_STREAM_APPLY_NEXT_MEDIA_TYPE_ID) {
                            recordTarget = uriBufferApplyNext;
                            uriBufferRecordTarget = schema.variantStreams;
                        }

                        if (tag.type === TAG_ATTRIBUTE_LIST_MULTIPLE_TYPE_ID) {
                            if (recordTarget[tagName] === undefined) {
                                recordTarget[tagName] = [attributesListForResult];
                            } else {
                                recordTarget[tagName].push(attributesListForResult);
                            }
                        } else {
                            recordTarget[tagName] = attributesListForResult;
                        }

                        lineStartPos = idx + 1;
                        colonCharPos = -1;

                        row++;
                    }
                }

                // URI parsing:
                if (
                    tagName[0] !== NUMBER_SIGN_CHAR &&
                    tagName.trim().length !== 0
                ) {
                    colonCharPos = -1;
                }
            }
        }
    }
};
