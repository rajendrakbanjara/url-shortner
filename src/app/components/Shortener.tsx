import React, { useState, useEffect } from "react";
import shortener from "/public/images/bg-shorten-mobile.svg";
export default function Shortener() {
  const [text, setText] = useState("");
  const [linkData, setLinkData] = useState(null);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!text) {
      alert("input is empty");
    } else {
      setSubmit(true);
    }
  };

  useEffect(() => {
    if (submit) {
      const shortenLink = async () => {
        const res = await fetch(`https://ulvis.net/API/write/get?url=${text}`);
        const data = await res.json();
        setLinkData(data.data);
        setText(""); // empty the input field
      };
      shortenLink();
      setSubmit(false);
    }
  }, [submit, text]);
  console.log("here the result");
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
              onChange={(e) => setText(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn-cta w-full py-2 px-5 rounded-lg  text-white font-bold md:w-40 md:ml-5"
              style={{ backgroundColor: "hsl(180, 66%, 49%)" }}
            >
              Shorten it
            </button>
          </div>
        </form>
        {/* display shorted link */}
        <div
          className="bg-white flex flex-col justify-center items-center text-center md:flex-row 
        md:justify-between p-3 mt-3 rounded-lg shadow"
        >
          <article>
            <h6 className="mb-3 md:mb-0">original link</h6>
          </article>
          <article >
            <ul className="md:flex md:items-center">
              <li className="md:mr-5">
                <button className="text-cyan-500">link is here</button>
              </li>
              <li>
                <button
                  className="text-white px-3 py-2 text-sm rounded-lg"
                  style={{ backgroundColor: "hsl(180, 66%, 49%)" }}
                >
                  copy
                </button>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
// {linkData && <h1>{linkData.url}</h1>}
