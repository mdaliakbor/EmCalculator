import {
  FaBehance,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const social = [
  {
    id: "1d92e6",
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/",
  },
  {
    id: "1d92e5",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/",
  },
  {
    id: "1d92e4",
    icon: <FaBehance />,
    link: "https://www.behance.net/",
  },
  {
    id: "1d92e3",
    icon: <FaTwitter />,
    link: "https://twitter.com/",
  },
  {
    id: "1d92e2",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/",
  },
  {
    id: "1d92e1",
    icon: <FaGithub />,
    link: "https://github.com/",
  },
];

const SocialMedia = () => {
  return (
    <div className='bg-cyan-50 rounded-3xl h-full py-[150px]'>
      <h4 className='text-[#454444] font-semibold text-center'>
        See My Latest Work Here
      </h4>
      <div className='grid grid-cols-3 gap-8 px-10 py-6'>
        {social.map((item) => (
          <a
            key={item.id}
            className='text-3xl text-[#0866FF] border-2 border-[#0866FF] py-4 px-5 rounded-xl flex justify-center '
          >
            {item.icon}
          </a>
        ))}
      </div>
      <p className='text-[#454444] font-semibold text-center '>Follow Me....</p>
    </div>
  );
};

export default SocialMedia;
