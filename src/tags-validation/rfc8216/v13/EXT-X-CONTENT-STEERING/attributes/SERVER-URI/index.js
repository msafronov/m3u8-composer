import { SERVER_URI_ID } from '@tags/const';

export const SERVER_URI_V13 = (attribute) => {
    attribute[SERVER_URI_ID].validate = (schema, data) => {};

    return attribute;
};
