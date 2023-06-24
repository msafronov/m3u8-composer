import { attribute } from '@parser/node/attribute';
import { CLOSED_CAPTIONS_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const CLOSED_CAPTIONS = () => {
    const attributeNode = attribute(CLOSED_CAPTIONS_ID);

    attributeNode[CLOSED_CAPTIONS_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
