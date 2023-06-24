import { decimalFloatingPointV13 } from '@tags-validation/rfc8216/v13/common/decimal-floating-point';
import { PART_HOLD_BACK_ID } from '@tags/const';

export const PART_HOLD_BACK_V13 = (attribute) => {
    attribute[PART_HOLD_BACK_ID].validate = (schema, data) => {
        decimalFloatingPointV13(schema, data);

        // TODO:
        // Its value MUST be at least twice the Part Target Duration

        // TODO:
        // Its value SHOULD be at least three times the Part Target Duration

        // TODO:
        // If different Renditions have different Part Target Durations
        // then PART-HOLD-BACK SHOULD be at least three times the maximum Part Target Duration.
    };
    
    return attribute;
};
