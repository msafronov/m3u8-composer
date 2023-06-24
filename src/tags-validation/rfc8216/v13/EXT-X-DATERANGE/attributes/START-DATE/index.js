import { START_DATE_ID } from '@tags/const';

export const START_DATE_V13 = (attribute) => {
    attribute[START_DATE_ID].validate = (schema, data) => {};

    return attribute;
};
