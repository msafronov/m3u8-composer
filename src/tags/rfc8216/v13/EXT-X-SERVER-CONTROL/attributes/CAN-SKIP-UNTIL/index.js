import { attribute } from '@parser/node/attribute';
import { CAN_SKIP_UNTIL_ID } from '@tags/const';

export const CAN_SKIP_UNTIL = () => {
    return attribute(CAN_SKIP_UNTIL_ID);
};
