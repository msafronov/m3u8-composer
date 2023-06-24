import { attribute } from '@parser/node/attribute';
import { SCTE35_OUT_ID } from '@tags/const';

export const SCTE35_OUT = () => {
    return attribute(SCTE35_OUT_ID);
};
