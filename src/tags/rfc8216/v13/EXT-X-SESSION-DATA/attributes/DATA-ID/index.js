import { attribute } from '@parser/node/attribute';
import { DATA_ID_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const DATA_ID = () => {
    const attributeNode = attribute(DATA_ID_ID);

    attributeNode[DATA_ID_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
