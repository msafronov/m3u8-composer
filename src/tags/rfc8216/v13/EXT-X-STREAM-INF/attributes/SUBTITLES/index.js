import { attribute } from '@parser/node/attribute';
import { SUBTITLES_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const SUBTITLES = () => {
    const attributeNode = attribute(SUBTITLES_ID);

    attributeNode[SUBTITLES_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
