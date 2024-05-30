import React from "react";
import MainLayout from "../../Layout/MainLayout";
import { about } from "../../assets/images";

function About() {
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
            </div>
            <img src={about} alt="" className="size-2/4" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
