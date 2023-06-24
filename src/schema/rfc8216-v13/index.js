import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';

// tags

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

// validation

import { EXTM3U_V13 } from '@tags-validation/rfc8216/v13/EXTM3U';

import { EXT_X_VERSION_V13 } from '@tags-validation/rfc8216/v13/EXT-X-VERSION';

import { EXT_X_INDEPENDENT_SEGMENTS_V13 } from '@tags-validation/rfc8216/v13/EXT-X-INDEPENDENT-SEGMENTS';

import { EXT_X_START_V13 } from '@tags-validation/rfc8216/v13/EXT-X-START';
import { TIME_OFFSET_V13 } from '@tags-validation/rfc8216/v13/EXT-X-START/attributes/TIME-OFFSET';
import { PRECISE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-START/attributes/PRECISE';

import { EXT_X_DEFINE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DEFINE';
import { NAME_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DEFINE/attributes/NAME';
import { VALUE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DEFINE/attributes/VALUE';
import { IMPORT_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DEFINE/attributes/IMPORT';
import { QUERYPARAM_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DEFINE/attributes/QUERYPARAM';

import { EXT_X_TARGETDURATION_V13 } from '@tags-validation/rfc8216/v13/EXT-X-TARGETDURATION';

import { EXT_X_MEDIA_SEQUENCE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA-SEQUENCE';

import { EXT_X_DISCONTINUITY_SEQUENCE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DISCONTINUITY-SEQUENCE';

import { EXT_X_ENDLIST_V13 } from '@tags-validation/rfc8216/v13/EXT-X-ENDLIST';

import { EXT_X_PLAYLIST_TYPE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PLAYLIST-TYPE';

import { EXT_X_I_FRAMES_ONLY_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAMES-ONLY';

import { EXT_X_PART_INF_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PART-INF';
import { PART_TARGET_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PART-INF/attributes/PART-TARGET';

import { EXT_X_SERVER_CONTROL_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SERVER-CONTROL';
import { CAN_SKIP_UNTIL_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/CAN-SKIP-UNTIL';
import { CAN_SKIP_DATERANGES_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/CAN-SKIP-DATERANGES';
import { HOLD_BACK_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/HOLD-BACK';
import { PART_HOLD_BACK_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/PART-HOLD-BACK';
import { CAN_BLOCK_RELOAD_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/CAN-BLOCK-RELOAD';

import { EXTINF_V13 } from '@tags-validation/rfc8216/v13/EXTINF';

import { EXT_X_BYTERANGE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-BYTERANGE';

import { EXT_X_DISCONTINUITY_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DISCONTINUITY';

import { EXT_X_KEY_V13 } from '@tags-validation/rfc8216/v13/EXT-X-KEY';
import { METHOD_V13 } from '@tags-validation/rfc8216/v13/EXT-X-KEY/attributes/METHOD';
import { URI_V13 } from '@tags-validation/rfc8216/v13/EXT-X-KEY/attributes/URI';
import { IV_V13 } from '@tags-validation/rfc8216/v13/EXT-X-KEY/attributes/IV';
import { KEYFORMAT_V13 } from '@tags-validation/rfc8216/v13/EXT-X-KEY/attributes/KEYFORMAT';
import { KEYFORMATVERSIONS_V13 } from '@tags-validation/rfc8216/v13/EXT-X-KEY/attributes/KEYFORMATVERSIONS';

import { EXT_X_MAP_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MAP';
import { URI_V13 as EXT_X_MAP_URI_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MAP/attributes/URI';
import { BYTERANGE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MAP/attributes/BYTERANGE';

import { EXT_X_PROGRAM_DATE_TIME_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PROGRAM-DATE-TIME';

import { EXT_X_GAP_V13 } from '@tags-validation/rfc8216/v13/EXT-X-GAP';

import { EXT_X_BITRATE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-BITRATE';

import { EXT_X_PART_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PART';
import { URI_V13 as EXT_X_PART_URI_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PART/attributes/URI';
import { DURATION_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PART/attributes/DURATION';
import { INDEPENDENT_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PART/attributes/INDEPENDENT';
import { BYTERANGE_V13 as EXT_X_PART_BYTERANGE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PART/attributes/BYTERANGE';
import { GAP_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PART/attributes/GAP';

import { EXT_X_DATERANGE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DATERANGE';
import { ID_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DATERANGE/attributes/ID';
import { CLASS_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DATERANGE/attributes/CLASS';
import { START_DATE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DATERANGE/attributes/START-DATE';
import { CUE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DATERANGE/attributes/CUE';
import { END_DATE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DATERANGE/attributes/END-DATE';
import { DURATION_V13 as EXT_X_DATERANGE_DURATION_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DATERANGE/attributes/DURATION';
import { PLANNED_DURATION_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DATERANGE/attributes/PLANNED-DURATION';
import { SCTE35_CMD_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DATERANGE/attributes/SCTE35-CMD';
import { SCTE35_OUT_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DATERANGE/attributes/SCTE35-OUT';
import { SCTE35_IN_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DATERANGE/attributes/SCTE35-IN';
import { END_ON_NEXT_V13 } from '@tags-validation/rfc8216/v13/EXT-X-DATERANGE/attributes/END-ON-NEXT';

import { EXT_X_SKIP_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SKIP';
import { SKIPPED_SEGMENTS_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SKIP/attributes/SKIPPED-SEGMENTS';
import { RECENTLY_REMOVED_DATERANGES_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SKIP/attributes/RECENTLY-REMOVED-DATERANGES';

import { EXT_X_PRELOAD_HINT_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PRELOAD-HINT';
import { TYPE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/TYPE';
import { URI_V13 as EXT_X_PRELOAD_HINT_URI_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/URI';
import { BYTERANGE_START_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/BYTERANGE-START';
import { BYTERANGE_LENGTH_V13 } from '@tags-validation/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/BYTERANGE-LENGTH';

import { EXT_X_RENDITION_REPORT_V13 } from '@tags-validation/rfc8216/v13/EXT-X-RENDITION-REPORT';
import { URI_V13 as EXT_X_RENDITION_REPORT_URI_V13 } from '@tags-validation/rfc8216/v13/EXT-X-RENDITION-REPORT/attributes/URI';
import { LAST_MSN_V13 } from '@tags-validation/rfc8216/v13/EXT-X-RENDITION-REPORT/attributes/LAST-MSN';
import { LAST_PART_V13 } from '@tags-validation/rfc8216/v13/EXT-X-RENDITION-REPORT/attributes/LAST-PART';

import { EXT_X_MEDIA_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA';
import { TYPE_V13 as EXT_X_MEDIA_TYPE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA/attributes/TYPE';
import { URI_V13 as EXT_X_MEDIA_URI_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA/attributes/URI';
import { GROUP_ID_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA/attributes/GROUP-ID';
import { LANGUAGE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA/attributes/LANGUAGE';
import { ASSOC_LANGUAGE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA/attributes/ASSOC-LANGUAGE';
import { NAME_V13 as EXT_X_MEDIA_NAME_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA/attributes/NAME';
import { STABLE_RENDITION_ID_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA/attributes/STABLE-RENDITION-ID';
import { DEFAULT_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA/attributes/DEFAULT';
import { AUTOSELECT_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA/attributes/AUTOSELECT';
import { FORCED_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA/attributes/FORCED';
import { INSTREAM_ID_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA/attributes/INSTREAM-ID';
import { CHARACTERISTICS_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA/attributes/CHARACTERISTICS';
import { CHANNELS_V13 } from '@tags-validation/rfc8216/v13/EXT-X-MEDIA/attributes/CHANNELS';

import { EXT_X_STREAM_INF_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF';
import { BANDWIDTH_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/BANDWIDTH';
import { AVERAGE_BANDWIDTH_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/AVERAGE-BANDWIDTH';
import { SCORE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/SCORE';
import { CODECS_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/CODECS';
import { SUPPLEMENTAL_CODECS_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/SUPPLEMENTAL-CODECS';
import { RESOLUTION_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/RESOLUTION';
import { FRAME_RATE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/FRAME-RATE';
import { HDCP_LEVEL_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/HDCP-LEVEL';
import { ALLOWED_CPC_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/ALLOWED-CPC';
import { VIDEO_RANGE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/VIDEO-RANGE';
import { STABLE_VARIANT_ID_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/STABLE-VARIANT-ID';
import { AUDIO_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/AUDIO';
import { VIDEO_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/VIDEO';
import { SUBTITLES_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/SUBTITLES';
import { CLOSED_CAPTIONS_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/CLOSED-CAPTIONS';
import { PATHWAY_ID_V13 } from '@tags-validation/rfc8216/v13/EXT-X-STREAM-INF/attributes/PATHWAY-ID';

import { EXT_X_I_FRAME_STREAM_INF_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF';
import { BANDWIDTH_V13 as EXT_X_I_FRAME_STREAM_INF_BANDWIDTH_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/BANDWIDTH';
import { AVERAGE_BANDWIDTH_V13 as EXT_X_I_FRAME_STREAM_INF_AVERAGE_BANDWIDTH_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/AVERAGE-BANDWIDTH';
import { SCORE_V13 as EXT_X_I_FRAME_STREAM_INF_SCORE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/SCORE';
import { CODECS_V13 as EXT_X_I_FRAME_STREAM_INF_CODECS_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/CODECS';
import { SUPPLEMENTAL_CODECS_V13 as EXT_X_I_FRAME_STREAM_INF_SUPPLEMENTAL_CODECS_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/SUPPLEMENTAL-CODECS';
import { RESOLUTION_V13 as EXT_X_I_FRAME_STREAM_INF_RESOLUTION_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/RESOLUTION';
import { HDCP_LEVEL_V13 as EXT_X_I_FRAME_STREAM_INF_HDCP_LEVEL_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/HDCP-LEVEL';
import { ALLOWED_CPC_V13 as EXT_X_I_FRAME_STREAM_INF_ALLOWED_CPC_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/ALLOWED-CPC';
import { VIDEO_RANGE_V13 as EXT_X_I_FRAME_STREAM_INF_VIDEO_RANGE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/VIDEO-RANGE';
import { STABLE_VARIANT_ID_V13 as EXT_X_I_FRAME_STREAM_INF_STABLE_VARIANT_ID_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/STABLE-VARIANT-ID';
import { VIDEO_V13 as EXT_X_I_FRAME_STREAM_INF_VIDEO_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/VIDEO';
import { PATHWAY_ID_V13 as EXT_X_I_FRAME_STREAM_INF_PATHWAY_ID_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/PATHWAY-ID';
import { URI_V13 as EXT_X_I_FRAME_STREAM_INF_URI_V13 } from '@tags-validation/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/URI';

import { EXT_X_SESSION_DATA_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SESSION-DATA';
import { DATA_ID_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SESSION-DATA/attributes/DATA-ID';
import { VALUE_V13 as EXT_X_SESSION_DATA_VALUE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SESSION-DATA/attributes/VALUE';
import { URI_V13 as EXT_X_SESSION_DATA_URI_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SESSION-DATA/attributes/URI';
import { FORMAT_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SESSION-DATA/attributes/FORMAT';
import { LANGUAGE_V13 as EXT_X_SESSION_DATA_LANGUAGE_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SESSION-DATA/attributes/LANGUAGE';

import { EXT_X_SESSION_KEY_V13 } from '@tags-validation/rfc8216/v13/EXT-X-SESSION-KEY';
import { METHOD_V13 as EXT_X_SESSION_KEY_METHOD_V13 } from '@tags-validation/rfc8216/v13/EXT-X-KEY/attributes/METHOD';
import { URI_V13 as EXT_X_SESSION_KEY_URI_V13 } from '@tags-validation/rfc8216/v13/EXT-X-KEY/attributes/URI';
import { IV_V13 as EXT_X_SESSION_KEY_IV_V13 } from '@tags-validation/rfc8216/v13/EXT-X-KEY/attributes/IV';
import { KEYFORMAT_V13 as EXT_X_SESSION_KEY_KEYFORMAT_V13 } from '@tags-validation/rfc8216/v13/EXT-X-KEY/attributes/KEYFORMAT';
import { KEYFORMATVERSIONS_V13 as EXT_X_SESSION_KEY_KEYFORMATVERSIONS_V13 } from '@tags-validation/rfc8216/v13/EXT-X-KEY/attributes/KEYFORMATVERSIONS';

import { EXT_X_CONTENT_STEERING_V13 } from '@tags-validation/rfc8216/v13/EXT-X-CONTENT-STEERING';
import { SERVER_URI_V13 } from '@tags-validation/rfc8216/v13/EXT-X-CONTENT-STEERING/attributes/SERVER-URI';
import { PATHWAY_ID_V13 as EXT_X_CONTENT_STEERING_PATHWAY_ID_V13 } from '@tags-validation/rfc8216/v13/EXT-X-CONTENT-STEERING/attributes/PATHWAY-ID';


export const createSchema = () => {
    return ValidationSchema(ParserSchema({
        // Basic Tags
        ...EXTM3U_V13(EXTM3U()),
        ...EXT_X_VERSION_V13(EXT_X_VERSION()),
    
        // Media or Multivariant Playlist Tags
        ...EXT_X_INDEPENDENT_SEGMENTS_V13(EXT_X_INDEPENDENT_SEGMENTS()),
        ...EXT_X_START_V13(EXT_X_START({
            ...TIME_OFFSET_V13(TIME_OFFSET()),
            ...PRECISE_V13(PRECISE()),
        })),
        ...EXT_X_DEFINE_V13(EXT_X_DEFINE({
            ...NAME_V13(NAME()),
            ...VALUE_V13(VALUE()),
            ...IMPORT_V13(IMPORT()),
            ...QUERYPARAM_V13(QUERYPARAM()),
        })),
    
        // Media Playlist Tags
        ...EXT_X_TARGETDURATION_V13(EXT_X_TARGETDURATION()),
        ...EXT_X_MEDIA_SEQUENCE_V13(EXT_X_MEDIA_SEQUENCE()),
        ...EXT_X_DISCONTINUITY_SEQUENCE_V13(EXT_X_DISCONTINUITY_SEQUENCE()),
        ...EXT_X_ENDLIST_V13(EXT_X_ENDLIST()),
        ...EXT_X_PLAYLIST_TYPE_V13(EXT_X_PLAYLIST_TYPE()),
        ...EXT_X_I_FRAMES_ONLY_V13(EXT_X_I_FRAMES_ONLY()),
        ...EXT_X_PART_INF_V13(EXT_X_PART_INF({
            ...PART_TARGET_V13(PART_TARGET()),
        })),
        ...EXT_X_SERVER_CONTROL_V13(EXT_X_SERVER_CONTROL({
            ...CAN_SKIP_UNTIL_V13(CAN_SKIP_UNTIL()),
            ...CAN_SKIP_DATERANGES_V13(CAN_SKIP_DATERANGES()),
            ...HOLD_BACK_V13(HOLD_BACK()),
            ...PART_HOLD_BACK_V13(PART_HOLD_BACK()),
            ...CAN_BLOCK_RELOAD_V13(CAN_BLOCK_RELOAD()),
        })),
    
        // Media Segment Tags
        ...EXTINF_V13(EXTINF()),
        ...EXT_X_BYTERANGE_V13(EXT_X_BYTERANGE()),
        ...EXT_X_DISCONTINUITY_V13(EXT_X_DISCONTINUITY()),
        ...EXT_X_KEY_V13(EXT_X_KEY({
            ...METHOD_V13(METHOD()),
            ...URI_V13(URI()),
            ...IV_V13(IV()),
            ...KEYFORMAT_V13(KEYFORMAT()),
            ...KEYFORMATVERSIONS_V13(KEYFORMATVERSIONS()),
        })),
        ...EXT_X_MAP_V13(EXT_X_MAP({
            ...EXT_X_MAP_URI_V13(EXT_X_MAP_URI()),
            ...BYTERANGE_V13(BYTERANGE()),
        })),
        ...EXT_X_PROGRAM_DATE_TIME_V13(EXT_X_PROGRAM_DATE_TIME()),
        ...EXT_X_GAP_V13(EXT_X_GAP()),
        ...EXT_X_BITRATE_V13(EXT_X_BITRATE()),
        ...EXT_X_PART_V13(EXT_X_PART({
            ...EXT_X_PART_URI_V13(EXT_X_PART_URI()),
            ...DURATION_V13(DURATION()),
            ...INDEPENDENT_V13(INDEPENDENT()),
            ...EXT_X_PART_BYTERANGE_V13(EXT_X_PART_BYTERANGE()),
            ...GAP_V13(GAP()),
        })),
    
        // Media Metadata Tags
        ...EXT_X_DATERANGE_V13(EXT_X_DATERANGE({
            ...ID_V13(ID()),
            ...CLASS_V13(CLASS()),
            ...START_DATE_V13(START_DATE()),
            ...CUE_V13(CUE()),
            ...END_DATE_V13(END_DATE()),
            ...EXT_X_DATERANGE_DURATION_V13(EXT_X_DATERANGE_DURATION()),
            ...PLANNED_DURATION_V13(PLANNED_DURATION()),
            ...SCTE35_CMD_V13(SCTE35_CMD()),
            ...SCTE35_OUT_V13(SCTE35_OUT()),
            ...SCTE35_IN_V13(SCTE35_IN()),
            ...END_ON_NEXT_V13(END_ON_NEXT()),
        })),
        ...EXT_X_SKIP_V13(EXT_X_SKIP({
            ...SKIPPED_SEGMENTS_V13(SKIPPED_SEGMENTS()),
            ...RECENTLY_REMOVED_DATERANGES_V13(RECENTLY_REMOVED_DATERANGES()),
        })),
        ...EXT_X_PRELOAD_HINT_V13(EXT_X_PRELOAD_HINT({
            ...TYPE_V13(TYPE()),
            ...EXT_X_PRELOAD_HINT_URI_V13(EXT_X_PRELOAD_HINT_URI()),
            ...BYTERANGE_START_V13(BYTERANGE_START()),
            ...BYTERANGE_LENGTH_V13(BYTERANGE_LENGTH()),
        })),
        ...EXT_X_RENDITION_REPORT_V13(EXT_X_RENDITION_REPORT({
            ...EXT_X_RENDITION_REPORT_URI_V13(EXT_X_RENDITION_REPORT_URI()),
            ...LAST_MSN_V13(LAST_MSN()),
            ...LAST_PART_V13(LAST_PART()),
        })),
    
        // Multivariant Playlist Tags
        ...EXT_X_MEDIA_V13(EXT_X_MEDIA({
            ...EXT_X_MEDIA_TYPE_V13(EXT_X_MEDIA_TYPE()),
            ...EXT_X_MEDIA_URI_V13(EXT_X_MEDIA_URI()),
            ...GROUP_ID_V13(GROUP_ID()),
            ...LANGUAGE_V13(LANGUAGE()),
            ...ASSOC_LANGUAGE_V13(ASSOC_LANGUAGE()),
            ...EXT_X_MEDIA_NAME_V13(EXT_X_MEDIA_NAME()),
            ...STABLE_RENDITION_ID_V13(STABLE_RENDITION_ID()),
            ...DEFAULT_V13(DEFAULT()),
            ...AUTOSELECT_V13(AUTOSELECT()),
            ...FORCED_V13(FORCED()),
            ...INSTREAM_ID_V13(INSTREAM_ID()),
            ...CHARACTERISTICS_V13(CHARACTERISTICS()),
            ...CHANNELS_V13(CHANNELS()),
        })),
        ...EXT_X_STREAM_INF_V13(EXT_X_STREAM_INF({
            ...BANDWIDTH_V13(BANDWIDTH()),
            ...AVERAGE_BANDWIDTH_V13(AVERAGE_BANDWIDTH()),
            ...SCORE_V13(SCORE()),
            ...CODECS_V13(CODECS()),
            ...SUPPLEMENTAL_CODECS_V13(SUPPLEMENTAL_CODECS()),
            ...RESOLUTION_V13(RESOLUTION()),
            ...FRAME_RATE_V13(FRAME_RATE()),
            ...HDCP_LEVEL_V13(HDCP_LEVEL()),
            ...ALLOWED_CPC_V13(ALLOWED_CPC()),
            ...VIDEO_RANGE_V13(VIDEO_RANGE()),
            ...STABLE_VARIANT_ID_V13(STABLE_VARIANT_ID()),
            ...AUDIO_V13(AUDIO()),
            ...VIDEO_V13(VIDEO()),
            ...SUBTITLES_V13(SUBTITLES()),
            ...CLOSED_CAPTIONS_V13(CLOSED_CAPTIONS()),
            ...PATHWAY_ID_V13(PATHWAY_ID()),
        })),
        ...EXT_X_I_FRAME_STREAM_INF_V13(EXT_X_I_FRAME_STREAM_INF({
            ...EXT_X_I_FRAME_STREAM_INF_BANDWIDTH_V13(EXT_X_I_FRAME_STREAM_INF_BANDWIDTH()),
            ...EXT_X_I_FRAME_STREAM_INF_AVERAGE_BANDWIDTH_V13(EXT_X_I_FRAME_STREAM_INF_AVERAGE_BANDWIDTH()),
            ...EXT_X_I_FRAME_STREAM_INF_SCORE_V13(EXT_X_I_FRAME_STREAM_INF_SCORE()),
            ...EXT_X_I_FRAME_STREAM_INF_CODECS_V13(EXT_X_I_FRAME_STREAM_INF_CODECS()),
            ...EXT_X_I_FRAME_STREAM_INF_SUPPLEMENTAL_CODECS_V13(EXT_X_I_FRAME_STREAM_INF_SUPPLEMENTAL_CODECS()),
            ...EXT_X_I_FRAME_STREAM_INF_RESOLUTION_V13(EXT_X_I_FRAME_STREAM_INF_RESOLUTION()),
            ...EXT_X_I_FRAME_STREAM_INF_HDCP_LEVEL_V13(EXT_X_I_FRAME_STREAM_INF_HDCP_LEVEL()),
            ...EXT_X_I_FRAME_STREAM_INF_ALLOWED_CPC_V13(EXT_X_I_FRAME_STREAM_INF_ALLOWED_CPC()),
            ...EXT_X_I_FRAME_STREAM_INF_VIDEO_RANGE_V13(EXT_X_I_FRAME_STREAM_INF_VIDEO_RANGE()),
            ...EXT_X_I_FRAME_STREAM_INF_STABLE_VARIANT_ID_V13(EXT_X_I_FRAME_STREAM_INF_STABLE_VARIANT_ID()),
            ...EXT_X_I_FRAME_STREAM_INF_VIDEO_V13(EXT_X_I_FRAME_STREAM_INF_VIDEO()),
            ...EXT_X_I_FRAME_STREAM_INF_PATHWAY_ID_V13(EXT_X_I_FRAME_STREAM_INF_PATHWAY_ID()),
            ...EXT_X_I_FRAME_STREAM_INF_URI_V13(EXT_X_I_FRAME_STREAM_INF_URI()),
        })),
        ...EXT_X_SESSION_DATA_V13(EXT_X_SESSION_DATA({
            ...DATA_ID_V13(DATA_ID()),
            ...EXT_X_SESSION_DATA_VALUE_V13(EXT_X_SESSION_DATA_VALUE()),
            ...EXT_X_SESSION_DATA_URI_V13(EXT_X_SESSION_DATA_URI()),
            ...FORMAT_V13(FORMAT()),
            ...EXT_X_SESSION_DATA_LANGUAGE_V13(EXT_X_SESSION_DATA_LANGUAGE()),
        })),
        ...EXT_X_SESSION_KEY_V13(EXT_X_SESSION_KEY({
            ...EXT_X_SESSION_KEY_METHOD_V13(EXT_X_SESSION_KEY_METHOD()),
            ...EXT_X_SESSION_KEY_URI_V13(EXT_X_SESSION_KEY_URI()),
            ...EXT_X_SESSION_KEY_IV_V13(EXT_X_SESSION_KEY_IV()),
            ...EXT_X_SESSION_KEY_KEYFORMAT_V13(EXT_X_SESSION_KEY_KEYFORMAT()),
            ...EXT_X_SESSION_KEY_KEYFORMATVERSIONS_V13(EXT_X_SESSION_KEY_KEYFORMATVERSIONS()),
        })),
        ...EXT_X_CONTENT_STEERING_V13(EXT_X_CONTENT_STEERING({
            ...SERVER_URI_V13(SERVER_URI()),
            ...EXT_X_CONTENT_STEERING_PATHWAY_ID_V13(EXT_X_CONTENT_STEERING_PATHWAY_ID()),
        })),
    }));
};
