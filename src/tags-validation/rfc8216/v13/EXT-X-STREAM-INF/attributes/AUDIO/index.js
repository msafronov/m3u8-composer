import { AUDIO_ID } from '@tags/const';

export const AUDIO_V13 = (attribute) => {
    attribute[AUDIO_ID].validate = (schema, data) => {};

    return attribute;
};
