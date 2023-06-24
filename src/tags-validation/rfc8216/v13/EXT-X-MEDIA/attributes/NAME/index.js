import { NAME_ID } from '@tags/const';

export const NAME_V13 = (attribute) => {
    attribute[NAME_ID].validate = (schema, data) => {};

    return attribute;
};
