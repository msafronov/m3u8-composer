import {
    BYTERANGE_ID,
    EXT_X_KEY_ID,
    EXT_X_MAP_ID,
    IV_ID,
    METHOD_ID,
    URI_ID,
} from '@tags/const';

export const EXT_X_MAP_V13 = (tag) => {
    tag[EXT_X_MAP_ID].validate = (schema, data, dataAll, index) => {
        const currentMediaSegment = schema.mediaSegments[index];

        if (data[URI_ID] === undefined) {
            schema.logs['0x1300'] = data;
        }

        if (currentMediaSegment !== undefined) {
            if (
                data[BYTERANGE_ID] !== undefined &&
                currentMediaSegment[EXT_X_MAP_ID] !== undefined &&
                currentMediaSegment[EXT_X_MAP_ID][BYTERANGE_ID] !== undefined &&
                currentMediaSegment[EXT_X_MAP_ID][BYTERANGE_ID]['offset'] === ''
            ) {
                schema.logs['0x1301'] = data;
            }

            if (
                currentMediaSegment[EXT_X_KEY_ID] !== undefined &&
                !!currentMediaSegment[EXT_X_KEY_ID].find((tagData) => {
                    return (
                        tagData[METHOD_ID] === 'AES-128' &&
                        tagData[IV_ID] === undefined
                    );
                })
            ) {
                schema.logs['0x1302'] = data;
            }
        }
    };

    return tag;
};
