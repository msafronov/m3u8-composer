import { EXT_X_PRELOAD_HINT_ID } from '@tags/const';

export const EXT_X_PRELOAD_HINT_V13 = (tag) => {
    tag[EXT_X_PRELOAD_HINT_ID].validate = (schema, data, dataAll) => {};

    return tag;
};
