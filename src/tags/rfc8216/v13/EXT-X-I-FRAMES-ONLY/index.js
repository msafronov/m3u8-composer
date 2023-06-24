import { tag } from '@parser/node/tag';
import { EXT_X_I_FRAMES_ONLY_ID } from '@tags/const';

export const EXT_X_I_FRAMES_ONLY = () => {
    return tag(EXT_X_I_FRAMES_ONLY_ID);
};
