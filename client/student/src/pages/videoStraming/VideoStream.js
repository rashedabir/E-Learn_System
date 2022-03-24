import { JitsiMeeting } from "@jitsi/react-sdk";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../GlobalState";

const VideoStream = () => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const { streamId } = useParams();

  return (
    <div>
      <JitsiMeeting
        roomName={streamId}
        getIFrameRef={(node) => (node.style.height = "800px")}
        jwt={token}
      />
    </div>
  );
};

export default VideoStream;
