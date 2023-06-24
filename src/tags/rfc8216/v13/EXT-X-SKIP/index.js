import { tagAttributeList } from '@parser/node/tag-attribute-list';
import { EXT_X_SKIP_ID } from '@tags/const';

export const EXT_X_SKIP = (attributes) => {
    return tagAttributeList(EXT_X_SKIP_ID, attributes);
};
