import { decimalFloatingPointV13 } from '@tags-validation/rfc8216/v13/common/decimal-floating-point';
import { HOLD_BACK_ID } from '@tags/const';

export const HOLD_BACK_V13 = (attribute) => {
    attribute[HOLD_BACK_ID].validate = (schema, data) => {
        decimalFloatingPointV13(schema, data);

        // TODO:
        // Its value MUST be at least three times the Target Duration.
    };
    
    return attribute;
};
