import { CLASS_ID } from '@tags/const';

export const CLASS_V13 = (attribute) => {
    attribute[CLASS_ID].validate = (schema, data) => {};

    return attribute;
};
