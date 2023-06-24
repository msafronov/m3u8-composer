import { tagAttributeList } from '@parser/node/tag-attribute-list';
import { EXT_X_SERVER_CONTROL_ID } from '@tags/const';

export const EXT_X_SERVER_CONTROL = (attributes) => {
    return tagAttributeList(EXT_X_SERVER_CONTROL_ID, attributes);
};
