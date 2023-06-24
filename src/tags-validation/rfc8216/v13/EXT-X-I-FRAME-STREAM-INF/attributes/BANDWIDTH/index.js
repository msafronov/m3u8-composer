import { BANDWIDTH_ID } from '@tags/const';

export const BANDWIDTH_V13 = (attribute) => {
    attribute[BANDWIDTH_ID].validate = (schema, data) => {};

    return attribute;
};
