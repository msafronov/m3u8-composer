import { ASSOC_LANGUAGE_ID } from '@tags/const';

export const ASSOC_LANGUAGE_V13 = (attribute) => {
    attribute[ASSOC_LANGUAGE_ID].validate = (schema, data) => {};

    return attribute;
};
