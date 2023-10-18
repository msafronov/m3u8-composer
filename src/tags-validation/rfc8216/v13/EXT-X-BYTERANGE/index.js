import { EXT_X_BYTERANGE_ID } from '@tags/const';
import { decimalIntegerV13 } from '@tags-validation/rfc8216/v13/common/decimal-integer';

export const EXT_X_BYTERANGE_V13 = (tag) => {
    tag[EXT_X_BYTERANGE_ID].validate = (schema, data, dataAll, idx) => {
        if (schema.mediaSegments[idx] === undefined) {
            return;
        }

        const value = schema.mediaSegments[idx][EXT_X_BYTERANGE_ID];

        if (value === undefined) {
            return;
        }

        decimalIntegerV13(schema, {
            ...data,
            value: value.length,
        });

        decimalIntegerV13(schema, {
            ...data,
            value: value.offset,
        });
    };

    return tag;
};
