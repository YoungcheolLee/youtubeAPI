import axios from "axios";
import { ChangeEvent, useState } from "react";
import { YoutubeItem } from "../interfaces/YoutubeItem";

export const HomePage = () => {
  const [itemList, setItemList] = useState<Array<YoutubeItem>>([]);
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
      <h1 style={{ color: "red" }}>Youtube Viewer</h1>
      <div>
        검색: <input type={"text"} value={input} onChange={handleInputChange} />
        <button onClick={handleOnCLick}> Search! </button> <br />
      </div>
      <br />
      <hr />
      <h3>Search Result</h3>
      {itemList.map((item, idx: number) => (
        <div key={idx}>
          제목: {item.snippet.title} <br />
          <iframe
            title={item.id.videoId}
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${item.id.videoId}`}
          />
        </div>
      ))}
    </div>
  );
};
