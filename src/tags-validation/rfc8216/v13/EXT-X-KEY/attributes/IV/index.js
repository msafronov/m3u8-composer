import { IV_ID } from '@tags/const';

export const IV_V13 = (attribute) => {
    attribute[IV_ID].validate = (schema, data) => {};

    return attribute;
};
