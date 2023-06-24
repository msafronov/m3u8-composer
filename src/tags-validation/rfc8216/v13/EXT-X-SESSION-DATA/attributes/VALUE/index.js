import { VALUE_ID } from '@tags/const';

export const VALUE_V13 = (attribute) => {
    attribute[VALUE_ID].validate = (schema, data) => {};

    return attribute;
};
