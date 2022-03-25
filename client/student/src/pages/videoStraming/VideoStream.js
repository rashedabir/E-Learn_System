import { JitsiMeeting } from "@jitsi/react-sdk";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../GlobalState";

const VideoStream = () => {
  const state = useContext(GlobalState);
  const { streamId } = useParams();
  const [user] = state.userAPI.user;

  const userInfo = {
    displayName: `${user.name} (${user.type})`,
    email: user.userName,
    changeLocalAvatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
  };

  const configOverwrite = {
    startWithAudioMuted: true,
    disableDeepLinking: true,
    prejoinPageEnabled: true,
    disableThirdPartyRequests: false,
    remoteVideoMenu: {
      disableKick: user.type === "instructor" ? false : true,
    },
  };

  const interFace = {
    APP_NAME: "E-Learn System",
    BRAND_WATERMARK_LINK: "",
    // TOOLBAR_ALWAYS_VISIBLE: false,
    SHOW_JITSI_WATERMARK: false,
    DEFAULT_BACKGROUND: "#040404",
    DEFAULT_LOGO_URL: "images/watermark.svg",
    DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
    DISABLE_PRESENCE_STATUS: false,
    DISABLE_TRANSCRIPTION_SUBTITLES: false,
    // ENABLE_DIAL_OUT: true,
    // HIDE_INVITE_MORE_HEADER: true,
    JITSI_WATERMARK_LINK: "",
    PROVIDER_NAME: "E-Learn System",
    SHOW_CHROME_EXTENSION_BANNER: false,
    SHOW_POWERED_BY: false,
    SHOW_PROMOTIONAL_CLOSE_PAGE: false,
    VIDEO_QUALITY_LABEL_DISABLED: false,
  };

  return (
    <div className="video_stream">
      <JitsiMeeting
        roomName={streamId}
        getIFrameRef={(node) => (node.style.height = "800px")}
        userInfo={userInfo}
        configOverwrite={configOverwrite}
        interfaceConfigOverwrite={interFace}
      />
    </div>
  );
};

export default VideoStream;
