import { RESOLUTION_ID } from '@tags/const';

export const RESOLUTION_V13 = (attribute) => {
    attribute[RESOLUTION_ID].validate = (schema, data) => {};

    return attribute;
};
