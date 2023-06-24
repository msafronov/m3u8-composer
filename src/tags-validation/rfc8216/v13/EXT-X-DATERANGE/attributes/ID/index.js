import { ID_ID } from '@tags/const';

export const ID_V13 = (attribute) => {
    attribute[ID_ID].validate = (schema, data) => {};

    return attribute;
};
