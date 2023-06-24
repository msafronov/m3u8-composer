import { DEFAULT_ID } from '@tags/const';

export const DEFAULT_V13 = (attribute) => {
    attribute[DEFAULT_ID].validate = (schema, data) => {};

    return attribute;
};
