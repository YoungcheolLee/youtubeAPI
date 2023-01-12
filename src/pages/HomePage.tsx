import axios from "axios";

export const HomePage = () => {
  const handleOnCLick = async () => {
    const secondTry = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      { params: { part: "snippet", key: process.env.REACT_APP_YOUTUBE_APIKEY } }
    );
    console.log(secondTry);
  };

  return (
    <div>
      Youtube Viewer
      {process.env.REACT_APP_YOUTUBE_APIKEY} <br />
      <button onClick={handleOnCLick}>요청해라ㅡㅡ</button>
    </div>
  );
};
