import { EXT_X_I_FRAME_STREAM_INF_ID } from '@tags/const';

export const EXT_X_I_FRAME_STREAM_INF_V13 = (tag) => {
    tag[EXT_X_I_FRAME_STREAM_INF_ID].validate = (schema, data, dataAll) => {};

    return tag;
};
