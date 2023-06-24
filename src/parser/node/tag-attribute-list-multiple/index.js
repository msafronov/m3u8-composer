import { NONE_MEDIA_TYPE_ID, TAG_ATTRIBUTE_LIST_MULTIPLE_TYPE_ID } from '@parser/const';

export const tagAttributeListMultiple = (
    tagName,
    attributes,
    mediaType = NONE_MEDIA_TYPE_ID,
) => {
    return {
        [tagName]: {
            ...attributes,
            type: TAG_ATTRIBUTE_LIST_MULTIPLE_TYPE_ID,
            mediaType: mediaType,
            data: [],
            parse: (value) => {
                return value;
            },
        },
    };
};
