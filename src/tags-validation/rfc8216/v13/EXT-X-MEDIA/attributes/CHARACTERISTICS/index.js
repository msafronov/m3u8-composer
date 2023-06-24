import { CHARACTERISTICS_ID } from '@tags/const';

export const CHARACTERISTICS_V13 = (attribute) => {
    attribute[CHARACTERISTICS_ID].validate = (schema, data) => {};

    return attribute;
};
