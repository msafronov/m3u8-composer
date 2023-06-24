import { CAN_SKIP_DATERANGES_ID, CAN_SKIP_UNTIL_ID, EXT_X_SERVER_CONTROL_ID } from '@tags/const';

export const EXT_X_SERVER_CONTROL_V13 = (tag) => {
    tag[EXT_X_SERVER_CONTROL_ID].validate = (schema, data, dataAll) => {
        if (dataAll.length > 1) {
            schema.logs['0x1240'] = data;
        }

        if (
            schema.playlist[EXT_X_SERVER_CONTROL_ID] !== undefined &&
            schema.playlist[EXT_X_SERVER_CONTROL_ID][CAN_SKIP_DATERANGES_ID] !== undefined &&
            schema.playlist[EXT_X_SERVER_CONTROL_ID][CAN_SKIP_UNTIL_ID] === undefined
        ) {
            schema.logs['0x1242'] = data;
        }
    };

    return tag;
};
