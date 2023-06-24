import { EXT_X_DISCONTINUITY_SEQUENCE_ID } from '@tags/const';
import { decimalIntegerV13 } from '../common/decimal-integer';

export const EXT_X_DISCONTINUITY_SEQUENCE_V13 = (tag) => {
    tag[EXT_X_DISCONTINUITY_SEQUENCE_ID].validate = (schema, data, dataAll) => {
        if (dataAll.length > 1) {
            schema.logs['0x1140'] = data;
        }

        decimalIntegerV13(schema, data);

        // TODO:
        // The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before the first
        // Media Segment in the Playlist.
     
        // TODO:
        // The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before any EXT-
        // X-DISCONTINUITY tag.
    };

    return tag;
};
