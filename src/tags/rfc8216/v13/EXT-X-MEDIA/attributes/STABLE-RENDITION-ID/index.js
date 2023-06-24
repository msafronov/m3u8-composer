import { attribute } from '@parser/node/attribute';
import { STABLE_RENDITION_ID_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const STABLE_RENDITION_ID = () => {
    const attributeNode = attribute(STABLE_RENDITION_ID_ID);

    attributeNode[STABLE_RENDITION_ID_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
