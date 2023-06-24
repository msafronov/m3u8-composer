import { tag } from '@parser/node/tag';
import { EXT_X_ENDLIST_ID } from '@tags/const';

export const EXT_X_ENDLIST = () => {
    return tag(EXT_X_ENDLIST_ID);
};
