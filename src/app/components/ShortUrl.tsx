import Image from "next/image";
import Shortener from "./Shortener";
const ShortUrl = () => {
  return (
    <>
      <div className="">
        {/* dispaly image and button container */}
        <div className="mx-5">
          <img
            src="../images/illustration-working.svg"
            className="officeImg object-cover object-left w-full h-80"
          />
        </div>
        {/* url input container */}
        <div>
          <div className="">
            <div className="-space-y-3">
              <p className="text-[40px] font-extrabold text-center text">
                More than just
              </p>
              <p className="text-[40px] font-extrabold text-center text">
                shorter link
              </p>
            </div>
            <p className="text-center text-[18px] mx-5 font-semibold text-gray-400">
              Build your brand's recongintion and get detailed insights on how
              your links are performing.
            </p>
          </div>
          {/* get Started button */}
          <div className="flex justify-center mt-7">
            <button
              className="text-white text-xl font-bold px-10 py-4 rounded-full"
              style={{ backgroundColor: "hsl(180, 66%, 49%)" }}
            >
              Get Started
            </button>
          </div>
          {/* input for short link */}
          <div className="mx-5 mt-5">
            <Shortener/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortUrl;
