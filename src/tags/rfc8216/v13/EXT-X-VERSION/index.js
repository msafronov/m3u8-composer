import { tag } from '@parser/node/tag';
import { EXT_X_VERSION_ID } from '@tags/const';

export const EXT_X_VERSION = () => {
    return tag(EXT_X_VERSION_ID);
};
