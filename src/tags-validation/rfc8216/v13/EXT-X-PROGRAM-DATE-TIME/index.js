import { EXT_X_PROGRAM_DATE_TIME_ID } from '@tags/const';

export const EXT_X_PROGRAM_DATE_TIME_V13 = (tag) => {
    tag[EXT_X_PROGRAM_DATE_TIME_ID].validate = (schema, data) => {};

    return tag;
};
