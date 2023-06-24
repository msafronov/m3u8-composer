import { AVERAGE_BANDWIDTH_ID } from '@tags/const';

export const AVERAGE_BANDWIDTH_V13 = (attribute) => {
    attribute[AVERAGE_BANDWIDTH_ID].validate = (schema, data) => {};

    return attribute;
};
