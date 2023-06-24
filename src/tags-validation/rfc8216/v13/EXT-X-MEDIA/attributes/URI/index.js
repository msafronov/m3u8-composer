import { URI_ID } from '@tags/const';

export const URI_V13 = (attribute) => {
    attribute[URI_ID].validate = (schema, data) => {};

    return attribute;
};
