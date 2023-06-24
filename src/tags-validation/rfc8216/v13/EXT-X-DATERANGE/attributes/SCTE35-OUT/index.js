import { SCTE35_OUT_ID } from '@tags/const';

export const SCTE35_OUT_V13 = (attribute) => {
    attribute[SCTE35_OUT_ID].validate = (schema, data) => {};

    return attribute;
};
