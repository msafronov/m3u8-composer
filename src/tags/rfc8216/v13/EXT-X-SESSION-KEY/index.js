import { tagAttributeList } from '@parser/node/tag-attribute-list';
import { EXT_X_SESSION_KEY_ID } from '@tags/const';

export const EXT_X_SESSION_KEY = (attributes) => {
    return tagAttributeList(EXT_X_SESSION_KEY_ID, attributes);
};
