import { LAST_MSN_ID } from '@tags/const';

export const LAST_MSN_V13 = (attribute) => {
    attribute[LAST_MSN_ID].validate = (schema, data) => {};

    return attribute;
};
