import { TIME_OFFSET_ID } from '@tags/const';
import { signedDecimalFloatingPointV13 } from '@tags-validation/rfc8216/v13/common/signed-decimal-floating-point';

export const TIME_OFFSET_V13 = (attribute) => {
    attribute[TIME_OFFSET_ID].validate = (schema, data) => {
        // TODO:
        // The absolute value of TIME-OFFSET SHOULD NOT be larger than the Playlist duration...

        signedDecimalFloatingPointV13(schema, data);

        // TODO:
        // If the Playlist does not contain the EXT-X-ENDLIST tag, the TIME-OFFSET SHOULD NOT...
    };

    return attribute;
};
