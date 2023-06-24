import { FORMAT_ID } from '@tags/const';

export const FORMAT_V13 = (attribute) => {
    attribute[FORMAT_ID].validate = (schema, data) => {};

    return attribute;
};
