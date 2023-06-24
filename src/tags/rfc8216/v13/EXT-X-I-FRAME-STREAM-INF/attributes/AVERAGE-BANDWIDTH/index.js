import { attribute } from '@parser/node/attribute';
import { AVERAGE_BANDWIDTH_ID } from '@tags/const';

export const AVERAGE_BANDWIDTH = () => {
    return attribute(AVERAGE_BANDWIDTH_ID);
};
