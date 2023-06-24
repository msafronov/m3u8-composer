import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { TYPE } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/TYPE';
import { URI } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/URI';
import { GROUP_ID } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/GROUP-ID';
import { LANGUAGE } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/LANGUAGE';
import { ASSOC_LANGUAGE } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/ASSOC-LANGUAGE';
import { NAME } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/NAME';
import { STABLE_RENDITION_ID } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/STABLE-RENDITION-ID';
import { DEFAULT } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/DEFAULT';
import { AUTOSELECT } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/AUTOSELECT';
import { FORCED } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/FORCED';
import { INSTREAM_ID } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/INSTREAM-ID';
import { CHARACTERISTICS } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/CHARACTERISTICS';
import { CHANNELS } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/CHANNELS';
import {
    EXT_X_MEDIA_ID,
    TYPE_ID,
    URI_ID,
    GROUP_ID_ID,
    LANGUAGE_ID,
    ASSOC_LANGUAGE_ID,
    NAME_ID,
    STABLE_RENDITION_ID_ID,
    DEFAULT_ID,
    AUTOSELECT_ID,
    FORCED_ID,
    INSTREAM_ID_ID,
    CHARACTERISTICS_ID,
    CHANNELS_ID,
} from '@tags/const';

import { EXT_X_MEDIA } from './index';

describe('v13 #EXT-X-MEDIA', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...TYPE(),
                ...URI(),
                ...GROUP_ID(),
                ...LANGUAGE(),
                ...ASSOC_LANGUAGE(),
                ...NAME(),
                ...STABLE_RENDITION_ID(),
                ...DEFAULT(),
                ...AUTOSELECT(),
                ...FORCED(),
                ...INSTREAM_ID(),
                ...CHARACTERISTICS(),
                ...CHANNELS(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="stereo",LANGUAGE="en",ASSOC-LANGUAGE="en",';
        data += 'STABLE-RENDITION-ID="id2",NAME="English",DEFAULT=YES,AUTOSELECT=YES,URI="nb-subtitles.m3u8",';
        data += 'FORCED=YES,INSTREAM-ID="CC1",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog",';
        data += 'CHANNELS="a1/a2/a3"';

        interpreter(data, schema);

        expect(schema[EXT_X_MEDIA_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [TYPE_ID]: {
                value: 'AUDIO',
                row: 1,
                col: 13,
            },
            [URI_ID]: {
                value: '"nb-subtitles.m3u8"',
                row: 1,
                col: 144,
            },
            [GROUP_ID_ID]: {
                value: '"stereo"',
                row: 1,
                col: 24,
            },
            [LANGUAGE_ID]: {
                value: '"en"',
                row: 1,
                col: 42,
            },
            [ASSOC_LANGUAGE_ID]: {
                value: '"en"',
                row: 1,
                col: 56,
            },
            [NAME_ID]: {
                value: '"English"',
                row: 1,
                col: 102,
            },
            [STABLE_RENDITION_ID_ID]: {
                value: '"id2"',
                row: 1,
                col: 76,
            },
            [DEFAULT_ID]: {
                value: 'YES',
                row: 1,
                col: 117,
            },
            [AUTOSELECT_ID]: {
                value: 'YES',
                row: 1,
                col: 129,
            },
            [FORCED_ID]: {
                value: 'YES',
                row: 1,
                col: 168,
            },
            [INSTREAM_ID_ID]: {
                value: '"CC1"',
                row: 1,
                col: 179,
            },
            [CHARACTERISTICS_ID]: {
                value: '"public.accessibility.transcribes-spoken-dialog"',
                row: 1,
                col: 197,
            },
            [CHANNELS_ID]: {
                value: '"a1/a2/a3"',
                row: 1,
                col: 262,
            },
        }]);
    });

    test('should append the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...TYPE(),
                ...URI(),
                ...GROUP_ID(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="stereo",URI="nb-subtitles1.m3u8"\n';
        data += '#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="stereo",URI="nb-subtitles2.m3u8"\n';

        interpreter(data, schema);

        expect(schema[EXT_X_MEDIA_ID].data.length).toBe(2);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...TYPE(),
                ...URI(),
                ...GROUP_ID(),
                ...LANGUAGE(),
                ...ASSOC_LANGUAGE(),
                ...NAME(),
                ...STABLE_RENDITION_ID(),
                ...DEFAULT(),
                ...AUTOSELECT(),
                ...FORCED(),
                ...INSTREAM_ID(),
                ...CHARACTERISTICS(),
                ...CHANNELS(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="stereo",LANGUAGE="en",ASSOC-LANGUAGE="en",';
        data += 'STABLE-RENDITION-ID="id2",NAME="English",DEFAULT=YES,AUTOSELECT=YES,URI="nb-subtitles.m3u8",';
        data += 'FORCED=YES,INSTREAM-ID="CC1",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog",';
        data += 'CHANNELS="a1/a2/a3"';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_MEDIA_ID]).toStrictEqual([{
            [TYPE_ID]: 'AUDIO',
            [URI_ID]: 'nb-subtitles.m3u8',
            [GROUP_ID_ID]: 'stereo',
            [LANGUAGE_ID]: 'en',
            [ASSOC_LANGUAGE_ID]: 'en',
            [NAME_ID]: 'English',
            [STABLE_RENDITION_ID_ID]: 'id2',
            [DEFAULT_ID]: 'YES',
            [AUTOSELECT_ID]: 'YES',
            [FORCED_ID]: 'YES',
            [INSTREAM_ID_ID]: 'CC1',
            [CHARACTERISTICS_ID]: [
                'public.accessibility.transcribes-spoken-dialog',
            ],
            [CHANNELS_ID]: [
                'a1',
                'a2',
                'a3',
            ],
        }]);
    });
});
