import { CHANNELS_ID } from '@tags/const';

export const CHANNELS_V13 = (attribute) => {
    attribute[CHANNELS_ID].validate = (schema, data) => {};

    return attribute;
};
