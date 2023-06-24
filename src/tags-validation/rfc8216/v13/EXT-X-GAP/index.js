import { EXT_X_GAP_ID } from '@tags/const';

export const EXT_X_GAP_V13 = (tag) => {
    tag[EXT_X_GAP_ID].validate = (schema, data) => {};

    return tag;
};
