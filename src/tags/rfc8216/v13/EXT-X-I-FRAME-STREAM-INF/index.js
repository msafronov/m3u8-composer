import { tagAttributeListMultiple } from '@parser/node/tag-attribute-list-multiple';
import { EXT_X_I_FRAME_STREAM_INF_ID } from '@tags/const';

export const EXT_X_I_FRAME_STREAM_INF = (attributes) => {
    return tagAttributeListMultiple(EXT_X_I_FRAME_STREAM_INF_ID, attributes);
};
