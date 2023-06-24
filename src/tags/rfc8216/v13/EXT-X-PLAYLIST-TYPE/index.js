import { tag } from '@parser/node/tag';
import { EXT_X_PLAYLIST_TYPE_ID } from '@tags/const';

export const EXT_X_PLAYLIST_TYPE = () => {
    return tag(EXT_X_PLAYLIST_TYPE_ID);
};
