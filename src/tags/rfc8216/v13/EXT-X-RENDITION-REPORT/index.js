import { tagAttributeListMultiple } from '@parser/node/tag-attribute-list-multiple';
import { EXT_X_RENDITION_REPORT_ID } from '@tags/const';

export const EXT_X_RENDITION_REPORT = (attributes) => {
    return tagAttributeListMultiple(EXT_X_RENDITION_REPORT_ID, attributes);
};
