import { attribute } from '@parser/node/attribute';
import { KEYFORMAT_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const KEYFORMAT = () => {
    const attributeNode = attribute(KEYFORMAT_ID);

    attributeNode[KEYFORMAT_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
