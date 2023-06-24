import { EXT_X_I_FRAMES_ONLY_ID } from '@tags/const';

export const EXT_X_I_FRAMES_ONLY_V13 = (tag) => {
    tag[EXT_X_I_FRAMES_ONLY_ID].validate = (schema, data, dataAll) => {
        if (dataAll.length > 1) {
            schema.logs['0x1200'] = data;
        }

        // TODO:
        // Media resources containing I-frame segments MUST begin with either...

        // TODO:
        // The byte range of an I-frame segment with an EXT-X-BYTERANGE tag applied to it
        // MUST NOT include its Media Initialization Section...
    };

    return tag;
};
