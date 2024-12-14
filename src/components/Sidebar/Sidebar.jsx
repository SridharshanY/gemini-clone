import { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[100vh] flex flex-col justify-between bg-gray-200 ps-5 py-4">
      <div>
        <img
          className="w-5 block ms-4 cursor-pointer"
          src={assets.menu_icon}
          onClick={() => setOpen(!open)}
        />
        <div className="mt-3 inline-flex items-center gap-2 px-4 py-4 bg-gray-300 rounded-full text-sm text-gray-500 cursor-pointer">
          <img className="w-5" src={assets.plus_icon} alt="" />
          {open ? <p>New Chat</p> : null}
        </div>
        {open ? (
          <div className="flex flex-col">
            <p className="mt-7 mb-5">Recent</p>
            <div className="flex items-start gap-2 p-2 pe-10 text-gray-800 cursor-pointer hover:bg-gray-300 rounded-3xl">
              <img className="w-5" src={assets.message_icon} alt="" />
              <p>What is React...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2 p-3 pe-10 text-gray-800 cursor-pointer hover:bg-gray-300 rounded-3xl">
          <img className="w-5" src={assets.question_icon} alt="" />
          {open ? <p>Help</p> : null}
        </div>
        <div className="flex items-center gap-2 p-3 pe-10 text-gray-800 cursor-pointer hover:bg-gray-300 rounded-3xl">
          <img className="w-5" src={assets.history_icon} alt="" />
          {open ? <p>Activity</p> : null}
        </div>
        <div className="flex items-center gap-2 p-3 pe-10 text-gray-800 cursor-pointer hover:bg-gray-300 rounded-3xl">
          <img className="w-5" src={assets.setting_icon} alt="" />
          {open ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
