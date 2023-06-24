import { HDCP_LEVEL_ID } from '@tags/const';

export const HDCP_LEVEL_V13 = (attribute) => {
    attribute[HDCP_LEVEL_ID].validate = (schema, data) => {};

    return attribute;
};
