import { tagAttributeList } from '@parser/node/tag-attribute-list';
import { EXT_X_START_ID } from '@tags/const';

export const EXT_X_START = (attributes) => {
    return tagAttributeList(EXT_X_START_ID, attributes);
};
