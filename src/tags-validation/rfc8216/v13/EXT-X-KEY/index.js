import { EXT_X_KEY_ID } from '@tags/const';

export const EXT_X_KEY_V13 = (tag) => {
    tag[EXT_X_KEY_ID].validate = (schema, data, dataAll) => {};

    return tag;
};
