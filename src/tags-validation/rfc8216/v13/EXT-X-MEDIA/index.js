import { EXT_X_MEDIA_ID } from '@tags/const';

export const EXT_X_MEDIA_V13 = (tag) => {
    tag[EXT_X_MEDIA_ID].validate = (schema, data) => {};

    return tag;
};
