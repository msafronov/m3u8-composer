import { PART_TARGET_ID } from '@tags/const';
import { decimalFloatingPointV13 } from '@tags-validation/rfc8216/v13/common/decimal-floating-point';

export const PART_TARGET_V13 = (attribute) => {
    attribute[PART_TARGET_ID].validate = (schema, data) => {
        decimalFloatingPointV13(schema, data);
    };

    return attribute;
};
