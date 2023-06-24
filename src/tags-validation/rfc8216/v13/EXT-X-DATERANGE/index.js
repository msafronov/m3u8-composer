import { EXT_X_DATERANGE_ID } from '@tags/const';

export const EXT_X_DATERANGE_V13 = (tag) => {
    tag[EXT_X_DATERANGE_ID].validate = (schema, data) => {};

    return tag;
};
