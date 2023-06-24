import { EXT_X_RENDITION_REPORT_ID } from '@tags/const';

export const EXT_X_RENDITION_REPORT_V13 = (tag) => {
    tag[EXT_X_RENDITION_REPORT_ID].validate = (schema, data, dataAll) => {};

    return tag;
};
