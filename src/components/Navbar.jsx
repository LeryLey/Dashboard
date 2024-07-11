import { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const [ms, setMs] = useState(false);
  const handle = () => {
    setMs(!ms);
  };
  return (
    <>
      <header className="flex overflow-hidden items-center justify-between px-10 py-4 bg-gray-900 shadow-sm ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center sm:space-x-16 space-x-6  "
        >
          <h2 className="text-xl font-medium text-blue-600 mr-16">
            OnlineShop.io
          </h2>
          <form
            action="index.html"
            className="relative items-center text-gray-500 sm:flex hidden"
          >
            <input
              type="text"
              name="searchProduct"
              id="searchProduct"
              placeholder="Search"
              className="border-2 border-transparent rounded-full outline-none px-2 py-1 sm:w-72 focus:border-blue-600 duration-300 bg-gray-500 text-white "
            />
            <span className="absolute right-2">
              <ion-icon name="search-outline"></ion-icon>
            </span>
          </form>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center space-x-4"
        >
          <div className="flex">
            {/* mail  */}
            <button className="text-xl text-white flex hover:bg-white/10 p-2 rounded-full ">
              <ion-icon name="mail-unread"></ion-icon>
            </button>
            {/* setting  */}
            <button className="text-xl text-white flex hover:bg-white/10 p-2 rounded-full ">
              <ion-icon name="cog"></ion-icon>
            </button>
            {/* notification */}
            <div
              id="notification"
              onClick={handle}
              className="relative text-xl text-white flex hover:bg-white/10 p-2 rounded-full "
            >
              <ion-icon name="notifications"></ion-icon>
              <div
                id="ms"
                className={
                  !ms
                    ? "absolute w-40 bg-blue-600 right-0 top-10 rounded-md flex items-center justify-center p-2 opacity-0 duration-300 z-10"
                    : "absolute w-40 bg-blue-600 right-0 top-10 rounded-md flex items-center justify-center p-2 opacity-[1] duration-300 z-10"
                }
              >
                <span className="text-sm text-gray-300 select-none ">
                  No Notifications
                </span>
              </div>
            </div>
          </div>
          {/* profile  */}
          <div id="profile" className="select-none">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="pf"
              className="w-8 h-8 object-cover rounded-full"
            />
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default Navbar;
