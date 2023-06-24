import { attribute } from '@parser/node/attribute';
import { CHANNELS_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const CHANNELS = () => {
    const attributeNode = attribute(CHANNELS_ID);

    attributeNode[CHANNELS_ID].parse = (value) => {
        return quotedString(value).split('/');
    };

    return attributeNode;
};
