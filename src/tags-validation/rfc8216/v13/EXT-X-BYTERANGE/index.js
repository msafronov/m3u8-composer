import { EXT_X_BYTERANGE_ID } from '@tags/const';

export const EXT_X_BYTERANGE_V13 = (tag) => {
    tag[EXT_X_BYTERANGE_ID].validate = (schema, data) => {};

    return tag;
};
