import { LANGUAGE_ID } from '@tags/const';

export const LANGUAGE_V13 = (attribute) => {
    attribute[LANGUAGE_ID].validate = (schema, data) => {};

    return attribute;
};
