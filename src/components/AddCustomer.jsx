import { IoMdSave } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
const AddCustomer = () => {
  const [input, setInput] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({...input, [name]: value });
  };
  const handleSubmit = (e) => {
    axios.post('localhost:api_react/api_2/api/user/save', input)
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <div
        id="addProducts"
        className="relative w-full h-full flex items-center justify-center duration-500 p-6 "
      >
        <div className="w-full h-full  rounded-xl  overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full p-4 ">
          <h2 className="text-xl font-medium text-gray-700 text-center">
            Add Customer
          </h2>
          {/* form  */}
          <form
            onSubmit={handleSubmit}
            className="my-4 sm:gap-5 gap-2 grid grid-cols-2 "
          >
            <div className="w-full">
              <label
                htmlFor="customer_name"
                className="text-blue-500 text-base"
              >
                Customer Name*
              </label>
              <br />
              <input
                type="text"
                name="customer_name"
                onChange={handleChange}
                placeholder="example..."
                className="px-2 py-1 rounded-md bg-black/40 w-full outline-none text-gray-300 placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
            </div>
            <div className="w-full">
              <label htmlFor="phone" className="text-blue-500 text-base">
                Phone Number*
              </label>
              <br />
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                id="phone"
                placeholder="000 000 0000"
                className="px-2 py-1 rounded-md bg-black/40 w-full outline-none text-gray-300 placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-blue-500 text-base">
                Email *
              </label>
              <br />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                id="email"
                placeholder="example@gmail.com"
                className="px-2 py-1 rounded-md bg-black/40 w-full outline-none text-gray-300 placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
            </div>
            <div className="w-full">
              <label htmlFor="dob" className="text-blue-500 text-base">
                Data of Birth *
              </label>
              <br />
              <input
                type="date"
                name="dob"
                onChange={handleChange}
                id="dob"
                placeholder="Example: Siem Reap"
                className="px-2 py-1 rounded-md bg-black/40 w-full outline-none text-gray-300 placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
            </div>
            <div className="w-full col-span-2">
              <label htmlFor="dob" className="text-blue-500 text-base">
                Address *
              </label>
              <br />
              <textarea
                name="address"
                onChange={handleChange}
                id="address"
                rows={8}
                placeholder="Example: 1234, Street, City, Province"
                className="px-2 py-1 rounded-md bg-black/40 w-full outline-none text-gray-300 placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              ></textarea>
            </div>
          </form>
          <div className="w-full flex space-x-2">
            <button
              onClick={handleSubmit}
              name="btnSaveProduct"
              id="btnSaveProduct"
              className=" px-5 bg-black hover:bg-black/80 active:bg-black rounded text-gray-200 py-1 uppercase flex items-center gap-1 "
            >
              <span>
                <IoMdSave />
              </span>
              Save Product
            </button>
            <button
              type="button"
              name="btnSaveProduct"
              id="btnSaveProduct"
              className=" px-5 bg-red-600 hover:bg-red-500 active:bg-red-600 border-2 border-red-600 text-gray-100 rounded  py-1 uppercase flex items-center gap-1 "
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
