import { attribute } from '@parser/node/attribute';
import { FORCED_ID } from '@tags/const';

export const FORCED = () => {
    return attribute(FORCED_ID);
};
