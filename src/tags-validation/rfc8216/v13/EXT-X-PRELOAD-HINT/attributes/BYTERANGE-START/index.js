import { BYTERANGE_START_ID } from '@tags/const';

export const BYTERANGE_START_V13 = (attribute) => {
    attribute[BYTERANGE_START_ID].validate = (schema, data) => {};

    return attribute;
};
