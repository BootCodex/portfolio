import React from "react";
import MainLayout from "../../Layout/MainLayout";
// import { about } from "../../assets/images";

function About() {
  return (
    <MainLayout>
      {/* <div className="container mx-auto my-10 ">
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
      </div> */}

      <div
        className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 h-screen"
        style={{
          backgroundImage: `url('about-image.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-xl mb-6">
          Welcome to [Company Name], a cutting-edge tech startup revolutionizing
          [industry/field].
        </p>
        <p className="text-lg mb-12">
          Our mission is to [briefly describe your mission and goals].
        </p>
        <div className="flex flex-wrap justify-center mb-12">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 text-center">
            <img
              src="founder1.jpg"
              alt="Founder 1"
              className="rounded-full w-48 h-48 mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">John Doe</h3>
            <p className="text-lg">CEO & Co-Founder</p>
            <p className="text-lg">
              John has [briefly describe John's background and experience].
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 text-center">
            <img
              src="founder2.jpg"
              alt="Founder 2"
              className="rounded-full w-48 h-48 mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Jane Smith</h3>
            <p className="text-lg">CTO & Co-Founder</p>
            <p className="text-lg">
              Jane has [briefly describe Jane's background and experience].
            </p>
          </div>
        </div>
        <div className="text-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p>
            We're a diverse and talented group of [number] individuals
            passionate about [industry/field].
          </p>
          <ul className="list-none m-0 p-0">
            <li>[Team Member 1]</li>
            <li>[Team Member 2]</li>
            <li>[Team Member 3]</li>
          </ul>
        </div>
        <div className="text-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p>Ready to collaborate or learn more?</p>
          <a
            href="mailto:info@company.com"
            className="text-blue-500 hover:text-blue-700"
          >
            info@company.com
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Twitter
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            LinkedIn
          </a>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
