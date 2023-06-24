import { DURATION_ID } from '@tags/const';

export const DURATION_V13 = (attribute) => {
    attribute[DURATION_ID].validate = (schema, data) => {};

    return attribute;
};
