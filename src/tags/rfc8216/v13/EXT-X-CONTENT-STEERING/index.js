import { tagAttributeList } from '@parser/node/tag-attribute-list';
import { EXT_X_CONTENT_STEERING_ID } from '@tags/const';

export const EXT_X_CONTENT_STEERING = (attributes) => {
    return tagAttributeList(EXT_X_CONTENT_STEERING_ID, attributes);
};
