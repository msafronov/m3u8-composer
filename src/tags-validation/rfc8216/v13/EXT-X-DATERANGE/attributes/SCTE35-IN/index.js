import { SCTE35_IN_ID } from '@tags/const';

export const SCTE35_IN_V13 = (attribute) => {
    attribute[SCTE35_IN_ID].validate = (schema, data) => {};

    return attribute;
};
