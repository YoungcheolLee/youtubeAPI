import axios from "axios";
import { useState } from "react";

export const HomePage = () => {
  const [itemList, setItemList] = useState<any>([]);

  const handleOnCLick = async () => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      { params: { part: "snippet", key: process.env.REACT_APP_YOUTUBE_APIKEY } }
    );
    console.log(response);

    const items = response.data.items;
    setItemList(items);
  };

  return (
    <div>
      Youtube Viewer <br />
      API Key : {process.env.REACT_APP_YOUTUBE_APIKEY} <br />
      <button onClick={handleOnCLick}>API요청</button>
      <br />
      <br />
      <hr />
      <h3>API Response</h3>
      {itemList.map((item: any, idx: any) => (
        <div key={idx}>
          {item.snippet.title}
          <img src={item.snippet.thumbnails.default.url} alt="" />
        </div>
      ))}
    </div>
  );
};
