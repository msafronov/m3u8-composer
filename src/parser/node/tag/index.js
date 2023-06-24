import { NONE_MEDIA_TYPE_ID, TAG_TYPE_ID } from '@parser/const';

export const tag = (tagName, attributes, mediaType = NONE_MEDIA_TYPE_ID) => {
    return {
        [tagName]: {
            type: TAG_TYPE_ID,
            mediaType: mediaType,
            data: [],
            parse: (value) => {
                return value;
            },
        },
    };
};
