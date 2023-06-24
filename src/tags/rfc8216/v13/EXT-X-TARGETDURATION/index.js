import { tag } from '@parser/node/tag';
import { EXT_X_TARGETDURATION_ID } from '@tags/const';

export const EXT_X_TARGETDURATION = () => {
    return tag(EXT_X_TARGETDURATION_ID);
};
