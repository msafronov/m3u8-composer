import { attribute } from '@parser/node/attribute';
import { AUDIO_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const AUDIO = () => {
    const attributeNode = attribute(AUDIO_ID);

    attributeNode[AUDIO_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
