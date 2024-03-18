import React, { useEffect, useState } from "react";
import {
  FaMinus,
  FaPlus,
} from "react-icons/fa6";
import SocialMedia from "./SocialMedia.jsx";

const App1 = () => {
  const [open, setOpen] = useState(false);
  const [profiles, setProfiles] = useState([]);
  // console.log(profiles[0].social);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className=' w-full py-20'>
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className='mt-20 w-[400px] h-[600px]  mx-auto shadow-2xl shadow-gray-700 rounded-3xl relative '
        >
          <div
            className={`
            ${open == true ? "h-[100px]" : "h-[420px]"}
            absolute top-0 left-0  w-full rounded-t-3xl bg-[url('./assets/img/Screenshot-new.png')] bg-cover bg-no-repeat bg-center duration-1000 flex justify-center items-end text-center`}
          >
            <div
              className={`${
                open == true ? "pt-4" : "pt-72"
              } absolute top-0 left-0 w-full h-full rounded-t-3xl bg-gradient-to-b from-[#E158AA] to-[#4D4984] opacity-80 duration-1000`}
            >
              <h2 className='text-white font-bold text-3xl'>
                {profile.name}
                <p className='text-white text-lg font-semibold'>
                  {profile.title}
                </p>
              </h2>
            </div>
          </div>
          {/* social media */}
          <SocialMedia social={profile.social} />
          <div
            className={`${
              open == true ? "h-[100px]" : "h-[180px]"
            } absolute bottom-0 left-0 border border-t-gray-120 bg-[#FFFFFF] w-full rounded-b-3xl duration-1000`}
          >
            <div className='relative w-full h-full rounded-b-3xl flex justify-around items-center'>
              <button
                onClick={() => setOpen(!open)}
                className={`${
                  open == true ? "scale-50 rotate-[360deg]" : " scale-100"
                } bg-[#ED145B] text-5xl p-4 text-white rounded-full  shadow-[0px_0px_50px_-5px_black] absolute -top-10 left-[40%] duration-1000`}
              >
                {open == false ? <FaPlus /> : <FaMinus />}
              </button>
              <div className='mt-5 flex gap-20 text-center text-[#68818C] text-xl leading-relaxed mr-5'>
                <div>
                  <h2>Projects</h2>
                  <p className='font-bold text-black'>{profile.projects}</p>
                </div>
                <div>
                  <h2>Views</h2>
                  <p className='font-bold text-black'>{profile.views}</p>
                </div>
                <div>
                  <h2>Likes</h2>
                  <p className='font-bold text-black'>{profile.likes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App1;
