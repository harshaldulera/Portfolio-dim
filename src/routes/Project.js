import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
const Project = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mx-0">
        <div className="w-[500px] flex-col p-10 bg-slate-600 rounded-xl my-8 mx-2 hover:scale-105 cursor-pointer duration-500 ">
          <h1 className="text-2xl hover:scale-105 flex justify-center font-bold text-gray-300 duration-500">
            Expense Tracker
          </h1>
          <h1 className="hover:scale-105 font-bold text-gray-500 duration-500">
            July 2023 - July 2023
          </h1>

          <p className="text-gray-300 font-bold hover:text-white duration-500 ">
            Created an expense tracker to help people track their day to day
            expenses.
          </p>

          <p className="text-gray-300 font-bold hover:text-white duration-500 ">
            Tackled lot of bugs and errors while developing this website which
            improved my knowledge about React development .
          </p>
          <p className="text-gray-300 font-bold hover:text-white duration-500 ">
            Utilized effective coding techniques and debugging practices during
            development to effectively manage website bugs and errors Developed
            an expense tracking web application using React.js. <br />
            Utilized effective coding techniques and debugging practices during
            development to effectively manage website bugs and errors.
          </p>
          <p className="text-gray-300 font-bold hover:text-white duration-500 ">
            An individual project where I used React framework fundamentals like
            useState hook and dynamic styling methods to develop this website.
          </p>
          <p className="text-gray-300 font-bold hover:text-white duration-500 ">
            This website can sort expenses based on years and display monthly
            expenditure in graphical way which helps us visualize data.
          </p>
        </div>

        <div className="w-[500px] flex-col p-10 bg-slate-600  rounded-xl my-8 mx-2 hover:scale-105 cursor-pointer duration-500 ">
          <h1 className="text-2xl hover:scale-105 flex justify-center font-bold text-gray-300 duration-500">
            Exercise Tracker
          </h1>
          <h1 className="hover:scale-105 font-bold text-gray-500 duration-500">
            July 2023 - July 2023
          </h1>

          <p className="text-gray-300 font-bold hover:text-white duration-500 ">
            Project aimed towards helping people track their daily exercises. •
          </p>
          <p className="text-gray-300 font-bold hover:text-white duration-500 ">
            This project helped me learn CRUD operations in React framework.
          </p>
          <br />
          <p className="text-gray-300 font-bold hover:text-white duration-500 ">
            Developed and deployed an exercise tracking web app which enabled
            users to log and track their exercise activities, with real- time
            updates on number of reps for each activity.
          </p>
        </div>
        <div className="w-[500px] flex-col p-10 bg-slate-600  rounded-xl my-8 mx-2 hover:scale-105 cursor-pointer duration-500 ">
          <h1 className="text-2xl hover:scale-105 flex justify-center font-bold text-gray-300 duration-500">
            Budget Buddy
          </h1>
          <h1 className="hover:scale-105 font-bold text-gray-500 duration-500">
            February 2024
          </h1>

          <p className="text-gray-300 font-bold hover:text-white duration-500 ">
            HTML CSS ,React js and Tailwind UI Integrated AI technology into the
            website for enhanced budget calculations.
          </p>

          <p className="text-gray-300 font-bold hover:text-white duration-500 ">
            Implemented features such as a chatbot, AI budget calculator, and
            expense trackingfunctionality.
          </p>
          <p className="text-gray-300 font-bold hover:text-white duration-500 ">
            Utilized Tailwind framework, HTML, and CSS to develop a fully
            responsive website, optimized for user engagement.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
