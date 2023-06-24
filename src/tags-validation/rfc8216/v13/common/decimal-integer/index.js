export const decimalIntegerV13 = (schema, data) => {
    if (
        schema.logs['0x0000'] === undefined &&
        /^[0-9]{1,20}$/.test(data.value) !== true
    ) {
        schema.logs['0x0000'] = data;
    }
};
