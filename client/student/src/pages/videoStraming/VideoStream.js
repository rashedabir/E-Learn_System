import { JitsiMeeting } from "@jitsi/react-sdk";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../GlobalState";

const VideoStream = () => {
  const state = useContext(GlobalState);
  const { streamId } = useParams();
  const [user] = state.userAPI.user;

  const userInfo = {
    moderator: user.type === "student" ? false : true,
    displayName: user.name,
    email: user.userName,
  };

  const configOverwrite = {
    disableDeepLinking: true,
    prejoinPageEnabled: true,
    disableThirdPartyRequests: false,
  };

  return (
    <div>
      <JitsiMeeting
        roomName={streamId}
        getIFrameRef={(node) => (node.style.height = "800px")}
        userInfo={userInfo}
        configOverwrite={configOverwrite}

        // jwt={token}
      />
    </div>
  );
};

export default VideoStream;
