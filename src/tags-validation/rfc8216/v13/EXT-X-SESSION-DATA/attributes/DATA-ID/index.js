import { DATA_ID_ID } from '@tags/const';

export const DATA_ID_V13 = (attribute) => {
    attribute[DATA_ID_ID].validate = (schema, data) => {};

    return attribute;
};
