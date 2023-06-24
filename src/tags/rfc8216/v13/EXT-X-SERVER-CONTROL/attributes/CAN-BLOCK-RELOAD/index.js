import { attribute } from '@parser/node/attribute';
import { CAN_BLOCK_RELOAD_ID } from '@tags/const';

export const CAN_BLOCK_RELOAD = () => {
    return attribute(CAN_BLOCK_RELOAD_ID);
};
