import { attribute } from '@parser/node/attribute';
import { PATHWAY_ID_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const PATHWAY_ID = () => {
    const attributeNode = attribute(PATHWAY_ID_ID);

    attributeNode[PATHWAY_ID_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
