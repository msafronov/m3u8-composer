import { BYTERANGE_ID } from '@tags/const';

export const BYTERANGE_V13 = (attribute) => {
    attribute[BYTERANGE_ID].validate = (schema, data) => {};

    return attribute;
};
