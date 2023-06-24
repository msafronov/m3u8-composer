import { tag } from '@parser/node/tag';
import { EXT_X_INDEPENDENT_SEGMENTS_ID } from '@tags/const';

export const EXT_X_INDEPENDENT_SEGMENTS = () => {
    return tag(EXT_X_INDEPENDENT_SEGMENTS_ID);
};
