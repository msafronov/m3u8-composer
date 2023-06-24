import { KEYFORMAT_ID } from '@tags/const';

export const KEYFORMAT_V13 = (attribute) => {
    attribute[KEYFORMAT_ID].validate = (schema, data) => {};

    return attribute;
};
