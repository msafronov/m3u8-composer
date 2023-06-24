import { SUPPLEMENTAL_CODECS_ID } from '@tags/const';

export const SUPPLEMENTAL_CODECS_V13 = (attribute) => {
    attribute[SUPPLEMENTAL_CODECS_ID].validate = (schema, data) => {};

    return attribute;
};
