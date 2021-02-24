import React, { useEffect, useState } from "react";
const RenderList = () => {
    const [query, setQuery] = useState('')
    function HandleSerach(e) {
        // useEffect(() => {
            if (e.key === "Enter") {
            const api_key = "b0f838c677a54828af7c35c5dbbe8dd4";
            const url = `http://newsapi.org/v2/everything?q=${query}&apiKey=${api_key}`;
            fetch(url)
              .then((res) => res.json())
              .then((data) => setstate(data.articles));
            }
        //   }, []);
    }
  

  const [state, setstate] = useState([]);
  console.log(state);
  const info = React.createRef();
  
  return (
    <div>
      <input
        ref={info}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={HandleSerach}
      />
      {state.map((item, index) => {
        return (
          <div key={`${item}__${index}`} className="divWrapper">
            <h1>{item.content}</h1>
            <div className="image_wrapper">
              <img src={item.urlToImage} alt="" />
            </div>
            <h2>{item.description}</h2>
            <hr/>
          </div>
        );
      })}
    </div>
  );
};

export default RenderList;
