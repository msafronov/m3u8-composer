import { BYTERANGE_LENGTH_ID } from '@tags/const';

export const BYTERANGE_LENGTH_V13 = (attribute) => {
    attribute[BYTERANGE_LENGTH_ID].validate = (schema, data) => {};

    return attribute;
};
