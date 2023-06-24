import { defaultDictionary } from './default-dictionary';

export const extendedLogsFeature = (schema, dictionary = defaultDictionary) => {
    if (schema.logs === undefined) {
        return;
    }

    try {
        Object.keys(schema.logs).forEach((logEventCode) => {
            schema.logs[logEventCode] = {
                ...dictionary[logEventCode],
                ...schema.logs[logEventCode],
            };
        });
    } catch (error) {
        //
    }

    return schema;
};
