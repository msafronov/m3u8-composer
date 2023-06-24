export const enumeratedStringV13 = (schema, data) => {
    if (
        schema.logs['0x0005'] === undefined &&
        /^[^\s\"\,]{1,}$/.test(data.value) !== true
    ) {
        schema.logs['0x0005'] = data;
    }
};
