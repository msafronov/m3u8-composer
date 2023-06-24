import { EXT_X_MAP_ID } from '@tags/const';

export const EXT_X_MAP_V13 = (tag) => {
    tag[EXT_X_MAP_ID].validate = (schema, data, dataAll) => {};

    return tag;
};
