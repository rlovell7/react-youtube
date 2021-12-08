import "./Video.css";
import YouTube from "react-youtube";
import { useParams } from "react-router";
import Comments from "./Comments";

const Video = () => {
  // const { id } = this.props.match.params;
  const params = useParams();
  return (
    <>
      <div className="Video-container">
        <YouTube className="Video" videoId={params.id} />
      </div>
      <Comments />
    </>
  );
};

export default Video;
