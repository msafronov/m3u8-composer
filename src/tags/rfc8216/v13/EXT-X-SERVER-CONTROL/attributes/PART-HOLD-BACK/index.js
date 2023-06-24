import { attribute } from '@parser/node/attribute';
import { PART_HOLD_BACK_ID } from '@tags/const';

export const PART_HOLD_BACK = () => {
    return attribute(PART_HOLD_BACK_ID);
};
