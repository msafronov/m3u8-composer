import { attribute } from '@parser/node/attribute';
import { SERVER_URI_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const SERVER_URI = () => {
    const attributeNode = attribute(SERVER_URI_ID);

    attributeNode[SERVER_URI_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
