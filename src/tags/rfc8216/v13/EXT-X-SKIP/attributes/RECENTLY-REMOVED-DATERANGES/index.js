import { attribute } from '@parser/node/attribute';
import { RECENTLY_REMOVED_DATERANGES_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const RECENTLY_REMOVED_DATERANGES = () => {
    const attributeNode = attribute(RECENTLY_REMOVED_DATERANGES_ID);

    attributeNode[RECENTLY_REMOVED_DATERANGES_ID].parse = (value) => {
        return quotedString(value).split('\t');
    };

    return attributeNode;
};
