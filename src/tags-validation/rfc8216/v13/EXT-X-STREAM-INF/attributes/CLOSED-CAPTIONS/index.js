import { CLOSED_CAPTIONS_ID } from '@tags/const';

export const CLOSED_CAPTIONS_V13 = (attribute) => {
    attribute[CLOSED_CAPTIONS_ID].validate = (schema, data) => {};

    return attribute;
};
