import { ParserSchema } from '@tags/rfc8216/v13/schema';

import { EXTM3U } from '@tags/rfc8216/v13/EXTM3U';

import { EXT_X_VERSION } from '@tags/rfc8216/v13/EXT-X-VERSION';

import { EXT_X_INDEPENDENT_SEGMENTS } from '@tags/rfc8216/v13/EXT-X-INDEPENDENT-SEGMENTS';

import { EXT_X_START } from '@tags/rfc8216/v13/EXT-X-START';
import { TIME_OFFSET } from '@tags/rfc8216/v13/EXT-X-START/attributes/TIME-OFFSET';
import { PRECISE } from '@tags/rfc8216/v13/EXT-X-START/attributes/PRECISE';

import { EXT_X_DEFINE } from '@tags/rfc8216/v13/EXT-X-DEFINE';
import { NAME } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/NAME';
import { VALUE } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/VALUE';
import { IMPORT } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/IMPORT';
import { QUERYPARAM } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/QUERYPARAM';

import { EXT_X_TARGETDURATION } from '@tags/rfc8216/v13/EXT-X-TARGETDURATION';

import { EXT_X_MEDIA_SEQUENCE } from '@tags/rfc8216/v13/EXT-X-MEDIA-SEQUENCE';

import { EXT_X_DISCONTINUITY_SEQUENCE } from '@tags/rfc8216/v13/EXT-X-DISCONTINUITY-SEQUENCE';

import { EXT_X_ENDLIST } from '@tags/rfc8216/v13/EXT-X-ENDLIST';

import { EXT_X_PLAYLIST_TYPE } from '@tags/rfc8216/v13/EXT-X-PLAYLIST-TYPE';

import { EXT_X_I_FRAMES_ONLY } from '@tags/rfc8216/v13/EXT-X-I-FRAMES-ONLY';

import { EXT_X_PART_INF } from '@tags/rfc8216/v13/EXT-X-PART-INF';
import { PART_TARGET } from '@tags/rfc8216/v13/EXT-X-PART-INF/attributes/PART-TARGET';

import { EXT_X_SERVER_CONTROL } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL';
import { CAN_SKIP_UNTIL } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/CAN-SKIP-UNTIL';
import { CAN_SKIP_DATERANGES } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/CAN-SKIP-DATERANGES';
import { HOLD_BACK } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/HOLD-BACK';
import { PART_HOLD_BACK } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/PART-HOLD-BACK';
import { CAN_BLOCK_RELOAD } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/CAN-BLOCK-RELOAD';

import { EXTINF } from '@tags/rfc8216/v13/EXTINF';

import { EXT_X_BYTERANGE } from '@tags/rfc8216/v13/EXT-X-BYTERANGE';

import { EXT_X_DISCONTINUITY } from '@tags/rfc8216/v13/EXT-X-DISCONTINUITY';

import { EXT_X_KEY } from '@tags/rfc8216/v13/EXT-X-KEY';
import { METHOD } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/METHOD';
import { URI } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/URI';
import { IV } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/IV';
import { KEYFORMAT } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/KEYFORMAT';
import { KEYFORMATVERSIONS } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/KEYFORMATVERSIONS';

import { EXT_X_MAP } from '@tags/rfc8216/v13/EXT-X-MAP';
import { URI as EXT_X_MAP_URI } from '@tags/rfc8216/v13/EXT-X-MAP/attributes/URI';
import { BYTERANGE } from '@tags/rfc8216/v13/EXT-X-MAP/attributes/BYTERANGE';

import { EXT_X_PROGRAM_DATE_TIME } from '@tags/rfc8216/v13/EXT-X-PROGRAM-DATE-TIME';

import { EXT_X_GAP } from '@tags/rfc8216/v13/EXT-X-GAP';

import { EXT_X_BITRATE } from '@tags/rfc8216/v13/EXT-X-BITRATE';

import { EXT_X_PART } from '@tags/rfc8216/v13/EXT-X-PART';
import { URI as EXT_X_PART_URI } from '@tags/rfc8216/v13/EXT-X-PART/attributes/URI';
import { DURATION } from '@tags/rfc8216/v13/EXT-X-PART/attributes/DURATION';
import { INDEPENDENT } from '@tags/rfc8216/v13/EXT-X-PART/attributes/INDEPENDENT';
import { BYTERANGE as EXT_X_PART_BYTERANGE } from '@tags/rfc8216/v13/EXT-X-PART/attributes/BYTERANGE';
import { GAP } from '@tags/rfc8216/v13/EXT-X-PART/attributes/GAP';

import { EXT_X_DATERANGE } from '@tags/rfc8216/v13/EXT-X-DATERANGE';
import { ID } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/ID';
import { CLASS } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/CLASS';
import { START_DATE } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/START-DATE';
import { CUE } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/CUE';
import { END_DATE } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/END-DATE';
import { DURATION as EXT_X_DATERANGE_DURATION } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/DURATION';
import { PLANNED_DURATION } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/PLANNED-DURATION';
import { SCTE35_CMD } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/SCTE35-CMD';
import { SCTE35_OUT } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/SCTE35-OUT';
import { SCTE35_IN } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/SCTE35-IN';
import { END_ON_NEXT } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/END-ON-NEXT';

import { EXT_X_SKIP } from '@tags/rfc8216/v13/EXT-X-SKIP';
import { SKIPPED_SEGMENTS } from '@tags/rfc8216/v13/EXT-X-SKIP/attributes/SKIPPED-SEGMENTS';
import { RECENTLY_REMOVED_DATERANGES } from '@tags/rfc8216/v13/EXT-X-SKIP/attributes/RECENTLY-REMOVED-DATERANGES';

import { EXT_X_PRELOAD_HINT } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT';
import { TYPE } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/TYPE';
import { URI as EXT_X_PRELOAD_HINT_URI } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/URI';
import { BYTERANGE_START } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/BYTERANGE-START';
import { BYTERANGE_LENGTH } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/BYTERANGE-LENGTH';

import { EXT_X_RENDITION_REPORT } from '@tags/rfc8216/v13/EXT-X-RENDITION-REPORT';
import { URI as EXT_X_RENDITION_REPORT_URI } from '@tags/rfc8216/v13/EXT-X-RENDITION-REPORT/attributes/URI';
import { LAST_MSN } from '@tags/rfc8216/v13/EXT-X-RENDITION-REPORT/attributes/LAST-MSN';
import { LAST_PART } from '@tags/rfc8216/v13/EXT-X-RENDITION-REPORT/attributes/LAST-PART';

import { EXT_X_MEDIA } from '@tags/rfc8216/v13/EXT-X-MEDIA';
import { TYPE as EXT_X_MEDIA_TYPE } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/TYPE';
import { URI as EXT_X_MEDIA_URI } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/URI';
import { GROUP_ID } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/GROUP-ID';
import { LANGUAGE } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/LANGUAGE';
import { ASSOC_LANGUAGE } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/ASSOC-LANGUAGE';
import { NAME as EXT_X_MEDIA_NAME } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/NAME';
import { STABLE_RENDITION_ID } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/STABLE-RENDITION-ID';
import { DEFAULT } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/DEFAULT';
import { AUTOSELECT } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/AUTOSELECT';
import { FORCED } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/FORCED';
import { INSTREAM_ID } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/INSTREAM-ID';
import { CHARACTERISTICS } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/CHARACTERISTICS';
import { CHANNELS } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/CHANNELS';

import { EXT_X_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-STREAM-INF';
import { BANDWIDTH } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/BANDWIDTH';
import { AVERAGE_BANDWIDTH } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/AVERAGE-BANDWIDTH';
import { SCORE } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/SCORE';
import { CODECS } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/CODECS';
import { SUPPLEMENTAL_CODECS } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/SUPPLEMENTAL-CODECS';
import { RESOLUTION } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/RESOLUTION';
import { FRAME_RATE } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/FRAME-RATE';
import { HDCP_LEVEL } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/HDCP-LEVEL';
import { ALLOWED_CPC } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/ALLOWED-CPC';
import { VIDEO_RANGE } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/VIDEO-RANGE';
import { STABLE_VARIANT_ID } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/STABLE-VARIANT-ID';
import { AUDIO } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/AUDIO';
import { VIDEO } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/VIDEO';
import { SUBTITLES } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/SUBTITLES';
import { CLOSED_CAPTIONS } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/CLOSED-CAPTIONS';
import { PATHWAY_ID } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/PATHWAY-ID';

import { EXT_X_I_FRAME_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF';
import { BANDWIDTH as EXT_X_I_FRAME_STREAM_INF_BANDWIDTH } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/BANDWIDTH';
import { AVERAGE_BANDWIDTH as EXT_X_I_FRAME_STREAM_INF_AVERAGE_BANDWIDTH } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/AVERAGE-BANDWIDTH';
import { SCORE as EXT_X_I_FRAME_STREAM_INF_SCORE } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/SCORE';
import { CODECS as EXT_X_I_FRAME_STREAM_INF_CODECS } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/CODECS';
import { SUPPLEMENTAL_CODECS as EXT_X_I_FRAME_STREAM_INF_SUPPLEMENTAL_CODECS } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/SUPPLEMENTAL-CODECS';
import { RESOLUTION as EXT_X_I_FRAME_STREAM_INF_RESOLUTION } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/RESOLUTION';
import { HDCP_LEVEL as EXT_X_I_FRAME_STREAM_INF_HDCP_LEVEL } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/HDCP-LEVEL';
import { ALLOWED_CPC as EXT_X_I_FRAME_STREAM_INF_ALLOWED_CPC } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/ALLOWED-CPC';
import { VIDEO_RANGE as EXT_X_I_FRAME_STREAM_INF_VIDEO_RANGE } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/VIDEO-RANGE';
import { STABLE_VARIANT_ID as EXT_X_I_FRAME_STREAM_INF_STABLE_VARIANT_ID } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/STABLE-VARIANT-ID';
import { VIDEO as EXT_X_I_FRAME_STREAM_INF_VIDEO } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/VIDEO';
import { PATHWAY_ID as EXT_X_I_FRAME_STREAM_INF_PATHWAY_ID } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/PATHWAY-ID';
import { URI as EXT_X_I_FRAME_STREAM_INF_URI } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/URI';

import { EXT_X_SESSION_DATA } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA';
import { DATA_ID } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA/attributes/DATA-ID';
import { VALUE as EXT_X_SESSION_DATA_VALUE } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA/attributes/VALUE';
import { URI as EXT_X_SESSION_DATA_URI } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA/attributes/URI';
import { FORMAT } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA/attributes/FORMAT';
import { LANGUAGE as EXT_X_SESSION_DATA_LANGUAGE } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA/attributes/LANGUAGE';

import { EXT_X_SESSION_KEY } from '@tags/rfc8216/v13/EXT-X-SESSION-KEY';
import { METHOD as EXT_X_SESSION_KEY_METHOD } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/METHOD';
import { URI as EXT_X_SESSION_KEY_URI } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/URI';
import { IV as EXT_X_SESSION_KEY_IV } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/IV';
import { KEYFORMAT as EXT_X_SESSION_KEY_KEYFORMAT } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/KEYFORMAT';
import { KEYFORMATVERSIONS as EXT_X_SESSION_KEY_KEYFORMATVERSIONS } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/KEYFORMATVERSIONS';

import { EXT_X_CONTENT_STEERING } from '@tags/rfc8216/v13/EXT-X-CONTENT-STEERING';
import { SERVER_URI } from '@tags/rfc8216/v13/EXT-X-CONTENT-STEERING/attributes/SERVER-URI';
import { PATHWAY_ID as EXT_X_CONTENT_STEERING_PATHWAY_ID } from '@tags/rfc8216/v13/EXT-X-CONTENT-STEERING/attributes/PATHWAY-ID';


export const createSchema = () => {
    return ParserSchema({
        // Basic Tags
        ...EXTM3U(),
        ...EXT_X_VERSION(),
    
        // Media or Multivariant Playlist Tags
        ...EXT_X_INDEPENDENT_SEGMENTS(),
        ...EXT_X_START({
            ...TIME_OFFSET(),
            ...PRECISE(),
        }),
        ...EXT_X_DEFINE({
            ...NAME(),
            ...VALUE(),
            ...IMPORT(),
            ...QUERYPARAM(),
        }),
    
        // Media Playlist Tags
        ...EXT_X_TARGETDURATION(),
        ...EXT_X_MEDIA_SEQUENCE(),
        ...EXT_X_DISCONTINUITY_SEQUENCE(),
        ...EXT_X_ENDLIST(),
        ...EXT_X_PLAYLIST_TYPE(),
        ...EXT_X_I_FRAMES_ONLY(),
        ...EXT_X_PART_INF({
            ...PART_TARGET(),
        }),
        ...EXT_X_SERVER_CONTROL({
            ...CAN_SKIP_UNTIL(),
            ...CAN_SKIP_DATERANGES(),
            ...HOLD_BACK(),
            ...PART_HOLD_BACK(),
            ...CAN_BLOCK_RELOAD(),
        }),
    
        // Media Segment Tags
        ...EXTINF(),
        ...EXT_X_BYTERANGE(),
        ...EXT_X_DISCONTINUITY(),
        ...EXT_X_KEY({
            ...METHOD(),
            ...URI(),
            ...IV(),
            ...KEYFORMAT(),
            ...KEYFORMATVERSIONS(),
        }),
        ...EXT_X_MAP({
            ...EXT_X_MAP_URI(),
            ...BYTERANGE(),
        }),
        ...EXT_X_PROGRAM_DATE_TIME(),
        ...EXT_X_GAP(),
        ...EXT_X_BITRATE(),
        ...EXT_X_PART({
            ...EXT_X_PART_URI(),
            ...DURATION(),
            ...INDEPENDENT(),
            ...EXT_X_PART_BYTERANGE(),
            ...GAP(),
        }),
    
        // Media Metadata Tags
        ...EXT_X_DATERANGE({
            ...ID(),
            ...CLASS(),
            ...START_DATE(),
            ...CUE(),
            ...END_DATE(),
            ...EXT_X_DATERANGE_DURATION(),
            ...PLANNED_DURATION(),
            ...SCTE35_CMD(),
            ...SCTE35_OUT(),
            ...SCTE35_IN(),
            ...END_ON_NEXT(),
        }),
        ...EXT_X_SKIP({
            ...SKIPPED_SEGMENTS(),
            ...RECENTLY_REMOVED_DATERANGES(),
        }),
        ...EXT_X_PRELOAD_HINT({
            ...TYPE(),
            ...EXT_X_PRELOAD_HINT_URI(),
            ...BYTERANGE_START(),
            ...BYTERANGE_LENGTH(),
        }),
        ...EXT_X_RENDITION_REPORT({
            ...EXT_X_RENDITION_REPORT_URI(),
            ...LAST_MSN(),
            ...LAST_PART(),
        }),
    
        // Multivariant Playlist Tags
        ...EXT_X_MEDIA({
            ...EXT_X_MEDIA_TYPE(),
            ...EXT_X_MEDIA_URI(),
            ...GROUP_ID(),
            ...LANGUAGE(),
            ...ASSOC_LANGUAGE(),
            ...EXT_X_MEDIA_NAME(),
            ...STABLE_RENDITION_ID(),
            ...DEFAULT(),
            ...AUTOSELECT(),
            ...FORCED(),
            ...INSTREAM_ID(),
            ...CHARACTERISTICS(),
            ...CHANNELS(),
        }),
        ...EXT_X_STREAM_INF({
            ...BANDWIDTH(),
            ...AVERAGE_BANDWIDTH(),
            ...SCORE(),
            ...CODECS(),
            ...SUPPLEMENTAL_CODECS(),
            ...RESOLUTION(),
            ...FRAME_RATE(),
            ...HDCP_LEVEL(),
            ...ALLOWED_CPC(),
            ...VIDEO_RANGE(),
            ...STABLE_VARIANT_ID(),
            ...AUDIO(),
            ...VIDEO(),
            ...SUBTITLES(),
            ...CLOSED_CAPTIONS(),
            ...PATHWAY_ID(),
        }),
        ...EXT_X_I_FRAME_STREAM_INF({
            ...EXT_X_I_FRAME_STREAM_INF_BANDWIDTH(),
            ...EXT_X_I_FRAME_STREAM_INF_AVERAGE_BANDWIDTH(),
            ...EXT_X_I_FRAME_STREAM_INF_SCORE(),
            ...EXT_X_I_FRAME_STREAM_INF_CODECS(),
            ...EXT_X_I_FRAME_STREAM_INF_SUPPLEMENTAL_CODECS(),
            ...EXT_X_I_FRAME_STREAM_INF_RESOLUTION(),
            ...EXT_X_I_FRAME_STREAM_INF_HDCP_LEVEL(),
            ...EXT_X_I_FRAME_STREAM_INF_ALLOWED_CPC(),
            ...EXT_X_I_FRAME_STREAM_INF_VIDEO_RANGE(),
            ...EXT_X_I_FRAME_STREAM_INF_STABLE_VARIANT_ID(),
            ...EXT_X_I_FRAME_STREAM_INF_VIDEO(),
            ...EXT_X_I_FRAME_STREAM_INF_PATHWAY_ID(),
            ...EXT_X_I_FRAME_STREAM_INF_URI(),
        }),
        ...EXT_X_SESSION_DATA({
            ...DATA_ID(),
            ...EXT_X_SESSION_DATA_VALUE(),
            ...EXT_X_SESSION_DATA_URI(),
            ...FORMAT(),
            ...EXT_X_SESSION_DATA_LANGUAGE(),
        }),
        ...EXT_X_SESSION_KEY({
            ...EXT_X_SESSION_KEY_METHOD(),
            ...EXT_X_SESSION_KEY_URI(),
            ...EXT_X_SESSION_KEY_IV(),
            ...EXT_X_SESSION_KEY_KEYFORMAT(),
            ...EXT_X_SESSION_KEY_KEYFORMATVERSIONS(),
        }),
        ...EXT_X_CONTENT_STEERING({
            ...SERVER_URI(),
            ...EXT_X_CONTENT_STEERING_PATHWAY_ID(),
        }),
    });
};
