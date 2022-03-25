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
  };

  const configOverwrite = {
    disableDeepLinking: true,
    prejoinPageEnabled: true,
    disableThirdPartyRequests: false,
    disableWaterMark: true,
    showBrandWatermark: false,
    SHOW_BRAND_WATERMARK: false,
    SHOW_JITSI_WATERMARK: false,
    SHOW_WATERMARK_FOR_GUESTS: false,
    SHOW_POWERED_BY: false,
    remoteVideoMenu: {
      disableKick: user.type === "instructor" ? false : true,
    },
  };

  return (
    <div className="video_stream">
      <JitsiMeeting
        roomName={streamId}
        getIFrameRef={(node) => (node.style.height = "800px")}
        userInfo={userInfo}
        configOverwrite={configOverwrite}
      />
    </div>
  );
};

export default VideoStream;
