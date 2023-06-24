import { END_ON_NEXT_ID } from '@tags/const';

export const END_ON_NEXT_V13 = (attribute) => {
    attribute[END_ON_NEXT_ID].validate = (schema, data) => {};

    return attribute;
};
