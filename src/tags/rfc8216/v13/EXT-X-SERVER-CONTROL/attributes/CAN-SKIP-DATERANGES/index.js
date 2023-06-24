import { attribute } from '@parser/node/attribute';
import { CAN_SKIP_DATERANGES_ID } from '@tags/const';

export const CAN_SKIP_DATERANGES = () => {
    return attribute(CAN_SKIP_DATERANGES_ID);
};
