import { attribute } from '@parser/node/attribute';
import { QUERYPARAM_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const QUERYPARAM = () => {
    const attributeNode = attribute(QUERYPARAM_ID);

    attributeNode[QUERYPARAM_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
