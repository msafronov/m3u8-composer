export const enumeratedStringListV13 = (schema, data) => {
    if (schema.logs['0x0006'] !== undefined) {
        return;
    }

    if (
        data.value.length === 0 ||
        data.value[0] !== '"' ||
        data.value[data.value.length - 1] !== '"'
    ) {
        schema.logs['0x0006'] = data;
    } else {
        const enumeratedStrings = data.value.slice(1, -1).split(',');

        for (let idx = 0; idx < enumeratedStrings.length; idx++) {
            if (/^[^\s\"\,]{1,}$/.test(enumeratedStrings[idx]) !== true) {
                schema.logs['0x0006'] = data;
                break;
            }
        }
    }
};
