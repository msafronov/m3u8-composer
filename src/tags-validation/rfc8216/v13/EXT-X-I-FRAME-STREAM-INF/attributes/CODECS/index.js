import { CODECS_ID } from '@tags/const';

export const CODECS_V13 = (attribute) => {
    attribute[CODECS_ID].validate = (schema, data) => {};

    return attribute;
};
