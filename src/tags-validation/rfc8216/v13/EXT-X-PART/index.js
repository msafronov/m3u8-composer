import { EXT_X_PART_ID } from '@tags/const';

export const EXT_X_PART_V13 = (tag) => {
    tag[EXT_X_PART_ID].validate = (schema, data, dataAll) => {};

    return tag;
};
