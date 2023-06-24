import { INDEPENDENT_ID } from '@tags/const';

export const INDEPENDENT_V13 = (attribute) => {
    attribute[INDEPENDENT_ID].validate = (schema, data) => {};

    return attribute;
};
