import { END_DATE_ID } from '@tags/const';

export const END_DATE_V13 = (attribute) => {
    attribute[END_DATE_ID].validate = (schema, data) => {};

    return attribute;
};
