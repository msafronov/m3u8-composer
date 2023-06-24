import { attribute } from '@parser/node/attribute';
import { SCTE35_CMD_ID } from '@tags/const';

export const SCTE35_CMD = () => {
    return attribute(SCTE35_CMD_ID);
};
