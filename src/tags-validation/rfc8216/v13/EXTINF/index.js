import { decimalFloatingPointV13 } from '@tags-validation/rfc8216/v13/common/decimal-floating-point';
import { decimalIntegerV13 } from '@tags-validation/rfc8216/v13/common/decimal-integer';
import {
    EXTINF_ID,
    EXT_X_TARGETDURATION_ID,
    EXT_X_VERSION_ID,
} from '@tags/const';

export const EXTINF_V13 = (tag) => {
    tag[EXTINF_ID].validate = (schema, data) => {
        if (schema.playlist[EXT_X_VERSION_ID] < 3) {
            decimalIntegerV13(schema, {
                ...data,
                value: data.value.duration,
            });
        } else {
            decimalFloatingPointV13(schema, {
                ...data,
                value: data.value.duration,
            });
        }

        if (
            Math.round(data.value.duration) > schema.playlist[EXT_X_TARGETDURATION_ID]
        ) {
            schema.logs['0x1261'] = data;
        }
    };

    return tag;
};
