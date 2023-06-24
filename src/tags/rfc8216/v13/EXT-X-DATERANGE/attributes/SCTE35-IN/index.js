import { attribute } from '@parser/node/attribute';
import { SCTE35_IN_ID } from '@tags/const';

export const SCTE35_IN = () => {
    return attribute(SCTE35_IN_ID);
};
