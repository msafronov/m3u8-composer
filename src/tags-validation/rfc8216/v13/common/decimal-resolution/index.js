export const decimalResolutionV13 = (schema, data) => {
    if (
        schema.logs['0x0007'] === undefined &&
        /^[0-9]{1,5}x[0-9]{1,5}$/.test(data.value) !== true
    ) {
        schema.logs['0x0007'] = data;
    }
};
