import { tag } from '@parser/node/tag';
import { EXT_X_DISCONTINUITY_SEQUENCE_ID } from '@tags/const';

export const EXT_X_DISCONTINUITY_SEQUENCE = () => {
    return tag(EXT_X_DISCONTINUITY_SEQUENCE_ID);
};
