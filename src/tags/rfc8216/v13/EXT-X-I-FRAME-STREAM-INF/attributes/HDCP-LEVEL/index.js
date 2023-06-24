import { attribute } from '@parser/node/attribute';
import { HDCP_LEVEL_ID } from '@tags/const';

export const HDCP_LEVEL = () => {
    return attribute(HDCP_LEVEL_ID);
};
