import {
    EXT_X_DEFINE_ID,
    IMPORT_ID,
    NAME_ID,
    QUERYPARAM_ID,
    VALUE_ID,
} from '@tags/const';

export const EXT_X_DEFINE_V13 = (tag) => {
    let nameDupicates = {};

    tag[EXT_X_DEFINE_ID].validate = (schema, data, dataAll, idx) => {
        const nameValue = data[NAME_ID];
        const importValue = data[IMPORT_ID];
        const queryParamValue = data[QUERYPARAM_ID];

        const variableNameCount = (
            Number(nameValue !== undefined) +
            Number(importValue !== undefined) +
            Number(queryParamValue !== undefined)
        );

        if (
            nameValue !== undefined &&
            data[VALUE_ID] === undefined
        ) {
            schema.logs['0x1084'] = data;
        }

        if (variableNameCount !== 1) {
            schema.logs['0x108C'] = data;
        }

        if (variableNameCount > 0) {
            const variableName = (nameValue || importValue || queryParamValue).value;

            if (nameDupicates[variableName] === undefined) {
                nameDupicates[variableName] = true;
            } else {
                schema.logs['0x108D'] = data;
            }
        }

        if (idx === dataAll.length - 1) {
            nameDupicates = {};
        }
    };

    return tag;
};
