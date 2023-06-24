import { tagAttributeList } from '@parser/node/tag-attribute-list';
import { EXT_X_PART_INF_ID } from '@tags/const';

export const EXT_X_PART_INF = (attributes) => {
    return tagAttributeList(EXT_X_PART_INF_ID, attributes);
};
