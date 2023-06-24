import { attribute } from '@parser/node/attribute';
import { HOLD_BACK_ID } from '@tags/const';

export const HOLD_BACK = () => {
    return attribute(HOLD_BACK_ID);
};
