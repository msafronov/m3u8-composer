import { INSTREAM_ID_ID } from '@tags/const';

export const INSTREAM_ID_V13 = (attribute) => {
    attribute[INSTREAM_ID_ID].validate = (schema, data) => {};

    return attribute;
};
