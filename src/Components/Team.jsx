import React from "react";
import Navbar from "./Navbar";
import bg from '../Assets/bg.jpg'

const Team = () => {
  return (
    <div className="bg-gradient-to-b from-[#F8F4E1] to-[#E8DFC7] text-[#543310] min-h-screen">
      <Navbar />
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Core Team
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Meet our team
          </h2>
          <p className="text-sm text-gray-700 md:text-base">
            We are a dynamic team of four enthusiastic members currently working
            at IBM. Each of us brings a unique set of skills and perspectives,
            united by our passion for technology and innovation. Our internship
            program at IBM offers us an incredible opportunity to learn, grow,
            and contribute to cutting-edge projects that make a difference in
            the world.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
            
             <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={bg}
               />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Rishav Chakraborty
              </p>
              <p className="mb-4 text-xs text-gray-100">Team Leader</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
                officiis.
              </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/rishav-chakraborty-56a76612a"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Dev-Rishav"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              {/* <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://media.licdn.com/dms/image/D5603AQHnGrSrfUAWzg/profile-displayphoto-shrink_200_200/0/1691404862659?e=2147483647&v=beta&t=PuixSunWYs8Gw-qqIFUOEzf8rnFkQqasGmWXXxpdnDw"
                alt="Person"
              /> */}
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Atul Tandan
                </p>
                <p className="mb-4 text-xs text-gray-100">Team Member </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus veritatis necessitatibus consequatur.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/atul-tandan-6583b7287"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/atul074"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="h-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              {/* <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://media.licdn.com/dms/image/D4D03AQHbQqAIuq-MJg/profile-displayphoto-shrink_200_200/0/1708619059978?e=2147483647&v=beta&t=IwXMyZucM-kK7L1dFIg6cMjwyLUaqZ3IB1LvLx_p0Hk"
                alt="Person"
              /> */}
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Ritik Parmar
                </p>
                <p className="mb-4 text-xs text-gray-100">Team Member</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae velit necessitatibus officia!
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/ritik-parmar-b79403287/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                  <a
                    href=""
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="h-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              {/* <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://media.licdn.com/dms/image/D4D03AQH76eTxIIRvmA/profile-displayphoto-shrink_800_800/0/1719847340036?e=1727913600&v=beta&t=h23EBDQFeF4x1iOi1gsxdy34HAK84qwUg4BTdhIGGoY"
                alt="Person"
              /> */}
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Vikash Nayma
                </p>
                <p className="mb-4 text-xs text-gray-100">Team Member</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam molestiae voluptatum!
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/vikas-nayma-305054286/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/atul074"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="h-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
