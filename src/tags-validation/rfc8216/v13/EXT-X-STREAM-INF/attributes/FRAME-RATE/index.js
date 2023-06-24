import { FRAME_RATE_ID } from '@tags/const';

export const FRAME_RATE_V13 = (attribute) => {
    attribute[FRAME_RATE_ID].validate = (schema, data) => {};

    return attribute;
};
