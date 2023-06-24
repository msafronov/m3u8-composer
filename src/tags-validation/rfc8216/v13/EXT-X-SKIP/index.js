import { EXT_X_SKIP_ID } from '@tags/const';

export const EXT_X_SKIP_V13 = (tag) => {
    tag[EXT_X_SKIP_ID].validate = (schema, data) => {};

    return tag;
};
