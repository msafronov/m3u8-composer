import { attribute } from '@parser/node/attribute';
import { BYTERANGE_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const BYTERANGE = () => {
    const attributeNode = attribute(BYTERANGE_ID);

    attributeNode[BYTERANGE_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
