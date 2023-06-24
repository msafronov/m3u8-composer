import { TYPE_ID } from '@tags/const';

export const TYPE_V13 = (attribute) => {
    attribute[TYPE_ID].validate = (schema, data) => {};

    return attribute;
};
