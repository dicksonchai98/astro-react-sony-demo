import React, { useEffect, useState } from "react";
import axios from "axios";

export default function VideoPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/db/youtube.json")
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto h-full  ">
      <div className="sm:h-[110px] max-sm:mt-[37px] text-center content-center">
        <p className=" text-[28px] font-bold">選購教學影片</p>
      </div>
      <div>
        <div className="h-[550px] w-[70%] max-sm:hidden max-sm:w-[90%] mx-auto bg-slate-200">
          {data.length > 0 && (
            <iframe
              width="100%"
              height="100%"
              src={data[0].video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="flex max-sm:block items-center  max-sm:w-[90%] w-[70%] mx-auto mb-[71px] justify-between">
          <div className="w-[21.2%] max-sm:h-[293px] h-[202px] max-sm:w-[100%] mt-[37px] bg-amber-200">
            {data.length > 0 && (
              <>
                <div className="h-[130px] max-sm:h-[188px]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={data[0].video}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4  max-sm:text-[28px]  max-sm:h-[105px] text-[15px] bg-slate-100">
                  {data[0].title}
                </div>
              </>
            )}
          </div>
          <div className="w-[21.2%] max-sm:h-[293px] h-[202px] bg-amber-200 mt-[37px] max-sm:w-[100%]">
            {data.length > 0 && (
              <>
                <div className="h-[130px] max-sm:h-[188px]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={data[0].video}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4  max-sm:text-[28px]  max-sm:h-[105px] text-[15px] bg-slate-100">
                  {data[0].title}
                </div>
              </>
            )}
          </div>
          <div className="w-[21.2%] max-sm:h-[293px] h-[202px] bg-amber-200 mt-[37px] max-sm:w-[100%]">
            {data.length > 0 && (
              <>
                <div className="h-[130px] max-sm:h-[188px]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={data[0].video}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 max-sm:h-[105px]  max-sm:text-[28px]  text-[15px] bg-slate-100">
                  {data[0].title}
                </div>
              </>
            )}
          </div>
          <button className="h-[49px]  w-[21.2%] bg-blue-500  text-white mt-[37px] max-sm:w-[100%]">
            觀看更多
          </button>
        </div>
      </div>
    </div>
  );
}
