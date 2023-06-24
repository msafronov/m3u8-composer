import { CUE_ID } from '@tags/const';

export const CUE_V13 = (attribute) => {
    attribute[CUE_ID].validate = (schema, data) => {};

    return attribute;
};
