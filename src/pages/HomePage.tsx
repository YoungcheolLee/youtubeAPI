import axios from "axios";
import { useState } from "react";

export const HomePage = () => {
  const [itemList, setItemList] = useState<any>([]);
  const [input, setInput] = useState<any>("");

  const handleInputChange = (e: any) => {
    return setInput(e.target.value);
  };

  const handleOnCLick = async () => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          key: process.env.REACT_APP_YOUTUBE_APIKEY,
          q: input,
        },
      }
    );
    console.log(response);

    const items = response.data.items;
    setItemList(items);
  };

  return (
    <div>
      Youtube Viewer <br />
      <br />
      <br />
      <hr />
      검색: <input type={"text"} value={input} onChange={handleInputChange} />
      <button onClick={handleOnCLick}> SEARCH! </button> <br />
      <h3>API Response</h3>
      {itemList.map((item: any, idx: any) => (
        <div key={idx}>
          {item.snippet.title} <br /> <br />
          <iframe
            title={idx}
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${item.id.videoId}`}
          />
        </div>
      ))}
    </div>
  );
};
