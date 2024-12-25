import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="flex-1 w-full min-h-[100vh] pb-[15vh] relative">
      <div className="flex items-center justify-between text-2xl p-5 text-gray-500">
        <p>Gemini</p>
        <img src={assets.user_icon} className="w-10 rounded-full" />
      </div>
      <div className="max-w-[900px] m-auto">
        <div className="m-12 text-5xl text-gray-300 font-semibold p-5">
          <p>
            <span className="bg-gradient-to-r from-blue-500 to bg-red-500 bg-clip-text">
              Hello Dev.{" "}
            </span>
          </p>
          <p>How can I help you?</p>
        </div>
        <div className="grid grid-flow-col gap-4 p-5">
          <div className="h-52 p-4 bg-gray-200 rounded-xl relative cursor-pointer hover:bg-gray-300">
            <p className="text-gray-600 text-lg">
              Suggest beautiful places to visit...
            </p>
            <img
              className="w-9 p-2 absolute bg-white rounded-3xl bottom-3 right-3"
              src={assets.compass_icon}
              alt=""
            />
          </div>
          <div className="h-52 p-4 bg-gray-200 rounded-xl relative cursor-pointer hover:bg-gray-300">
            <p className="text-gray-600 text-lg">
              Briefly summarize a concept...
            </p>
            <img
              className="w-9 p-2 absolute bg-white rounded-3xl bottom-3 right-3"
              src={assets.bulb_icon}
              alt=""
            />
          </div>
          <div className="h-52 p-4 bg-gray-200 rounded-xl relative cursor-pointer hover:bg-gray-300">
            <p className="text-gray-600 text-lg">
              Brainstorm team bonding ideas...
            </p>
            <img
              className="w-9 p-2 absolute bg-white rounded-3xl bottom-3 right-3"
              src={assets.message_icon}
              alt=""
            />
          </div>
          <div className="h-52 p-4 bg-gray-200 rounded-xl relative cursor-pointer hover:bg-gray-300">
            <p className="text-gray-600 text-lg">
              Improve readability of this code...
            </p>
            <img
              className="w-9 p-2 absolute bg-white rounded-3xl bottom-3 right-3"
              src={assets.code_icon}
              alt=""
            />
          </div>
        </div>
        <div className="absolute bottom-0 w-full max-w-[900px] py-0 px-5 m-auto">
          <div className="flex flex-row items-center justify-between gap-5 bg-gray-300 py-3 px-5 rounded-3xl">
            <input className="flex-1 bg-transparent outline-none" type="text" placeholder="Ask Gemini" />
            <div className="flex gap-4">
              <img className="w-6 cursor-pointer" src={assets.gallery_icon} alt="" />
              <img className="w-6 cursor-pointer" src={assets.mic_icon} alt="" />
              <img className="w-6 cursor-pointer" src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="text-md m-4 text-center">Gemini can make mistakes, so double-check it</p>
        </div>
      </div>
    </div>
  );
};



export default Main;
