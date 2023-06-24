import { STABLE_RENDITION_ID_ID } from '@tags/const';

export const STABLE_RENDITION_ID_V13 = (attribute) => {
    attribute[STABLE_RENDITION_ID_ID].validate = (schema, data) => {};

    return attribute;
};
