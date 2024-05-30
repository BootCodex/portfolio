import React from "react";
import MainLayout from "../../Layout/MainLayout";
import { hero, v1, v2, v3 } from "../../assets/images";

const Home = () => {
  return (
    <MainLayout>
      <div className="container mx-auto my-10 ">
        <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
          <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <div className="flex flex-col gap-5 lg:gap-10">
              <p className=" text-lg sm:text-lg md:text-lg lg:text-lg font-medium">
                At MG Solutions, we're more than just a tech company we're your
                strategic partner in navigating the ever-evolving landscape of
                technology. From cutting-edge software development to innovative
                digital solutions, we're here to empower your business and drive
                your success forward
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500">
                Learn at your own pace, with lifetime{" "}
                <br className="lg:flex hidden" /> access on mobile and desktop
              </p>
              <button className="btn sm:btn-sm md:btn-md lg:btn-lg sm:px-5 sm:py-2 md:px-2 md:py-2 lg:px-10 lg:py-3 bg-[#524fd5] text-white rounded-full border-none sm:w-24 md:w-36 lg:w-44 capitalize">
                Get Started
              </button>
            </div>
            <img src={hero} alt="" />
          </div>
        </div>

        {/* email and get in touch */}

        <div className="mx-auto flex flex-col gap-5 items-center justify-center py-20">
          <p className=" text-xl md:text-2xl lg:text-4xl font-medium text-center">
            Get in touch with us today
          </p>
          <p className="text-base sm:text-lg lg:text-2xl font-medium text-center">
            Start fulfilling your dreams with us
          </p>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 items-center mt-5">
            <input
              type="email"
              className="text-white px-10 py-3 rounded-full w-72 lg:w-96 outline-none bg-[#5c5e61]"
              placeholder="Enter your Email"
            />
            <button className="btn btn-sm px-10 py-3 lg:btn-lg bg-[#524fd5] btn-lg rounded-full border-none">
              Send
            </button>
          </div>
        </div>

        {/* my values */}

        <div className="mx-auto py-20">
          <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
            WHY CHOOSE US
          </p>
          <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
            Our Values
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
            <div className="flex flex-col gap-5 items-center">
              <img src={v1} alt="v1" />
              <p className="text-2xl font-semibold">Speaking clubs</p>
              <p className="text-gray-500 text-center">
                In our school you will practice <br /> your speaking skills and
                just get <br /> a lot of positive emotions!
              </p>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <img src={v2} alt="v2" />
              <p className="text-2xl font-semibold">Quality control</p>
              <p className="text-gray-500 text-center">
                In our school you will practice <br /> your speaking skills and
                just get <br /> a lot of positive emotions!
              </p>
            </div>{" "}
            <div className="flex flex-col gap-5 items-center">
              <img src={v3} alt="v3" />
              <p className="text-2xl font-semibold">Progress analysis</p>
              <p className="text-gray-500 text-center">
                In our school you will practice <br /> your speaking skills and
                just get <br /> a lot of positive emotions!
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
