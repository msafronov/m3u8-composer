import { attribute } from '@parser/node/attribute';
import { VIDEO_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const VIDEO = () => {
    const attributeNode = attribute(VIDEO_ID);

    attributeNode[VIDEO_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
