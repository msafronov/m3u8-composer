import { METHOD_ID } from '@tags/const';

export const METHOD_V13 = (attribute) => {
    attribute[METHOD_ID].validate = (schema, data) => {};

    return attribute;
};
