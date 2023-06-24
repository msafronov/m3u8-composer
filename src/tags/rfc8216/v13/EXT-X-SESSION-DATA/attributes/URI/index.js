import { attribute } from '@parser/node/attribute';
import { URI_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const URI = () => {
    const attributeNode = attribute(URI_ID);

    attributeNode[URI_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
