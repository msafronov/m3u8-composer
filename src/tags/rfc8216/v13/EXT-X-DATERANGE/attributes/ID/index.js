import { attribute } from '@parser/node/attribute';
import { ID_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const ID = () => {
    const attributeNode = attribute(ID_ID);

    attributeNode[ID_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
