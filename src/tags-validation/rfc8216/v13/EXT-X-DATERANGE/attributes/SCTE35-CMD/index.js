import { SCTE35_CMD_ID } from '@tags/const';

export const SCTE35_CMD_V13 = (attribute) => {
    attribute[SCTE35_CMD_ID].validate = (schema, data) => {};

    return attribute;
};
