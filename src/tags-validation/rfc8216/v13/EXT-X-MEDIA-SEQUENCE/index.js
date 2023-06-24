import { EXT_X_MEDIA_SEQUENCE_ID } from '@tags/const';
import { decimalIntegerV13 } from '../common/decimal-integer';

export const EXT_X_MEDIA_SEQUENCE_V13 = (tag) => {
    tag[EXT_X_MEDIA_SEQUENCE_ID].validate = (schema, data, dataAll) => {
        if (dataAll.length > 1) {
            schema.logs['0x1120'] = data;
        }

        decimalIntegerV13(schema, data);

        // TODO:
        // The EXT-X-MEDIA-SEQUENCE tag MUST appear before the first Media
        // Segment in the Playlist.
    };

    return tag;
};
