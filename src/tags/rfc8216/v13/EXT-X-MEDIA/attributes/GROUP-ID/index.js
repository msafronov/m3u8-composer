import { attribute } from '@parser/node/attribute';
import { GROUP_ID_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const GROUP_ID = () => {
    const attributeNode = attribute(GROUP_ID_ID);

    attributeNode[GROUP_ID_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
