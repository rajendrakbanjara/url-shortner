import React, { useState } from "react";
import shortener from "/public/images/bg-shorten-mobile.svg";
export default function Shortener() {
  // https://ulvis.net/API/write/get?url=

  const [text, setText] = useState("");
  const [link, setLink] = useState([]);
  const handleSubmit = (e:any)=>{
    e.preventDefault()
    if(!text){
      alert("input is empty");
    }else{
      const shortenLink = async () =>{
        const res = await fetch(`https://ulvis.net/API/write/get?url=${text}`);
        const data = await res.json();
        setLink(data.result);
      }
      shortenLink();
    }
  }
  return (
    <>
      <section className="shortener max-width relative">
        <picture>
          <source media="" srcSet="../images/bg-shorten-desktop.svg" />
          <img src="../images/bg-shorten-mobile.svg" className="" />
        </picture>

        <form className="form" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <input
              value={text}
              className="w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3"
              type="url"
              placeholder="Shorten a link here"
              onChange={(e)=>setText(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn-cta w-full py-2 px-5 rounded-lg  text-white font-bold md:w-40 md:ml-5"
              style={{ backgroundColor: "hsl(180, 66%, 49%)" }}
            >
              Shorten it
            </button>
            <h1>{link}</h1>
          </div>
        </form>
      </section>
    </>
  );
}
