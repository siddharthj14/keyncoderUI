import React from "react";

const PostloginCard = ({ theme }) => {
  return (
    <div
      className={`mt-20 w-[36rem] flex items-center justify-between rounded-3xl mx-8 pl-8 ${
        theme == "dark"
          ? "bg-transparent"
          : "bg-gradient-to-r from-[#FCB900] via-[#FA793F] to-[#ED374D]  hover:from-[#ED374D] hover:via-[#FA793F] hover:to-[#FCB900] "
      }`}
    >
      <div>
        <h3 className="text-2xl text-white">Hi Sara</h3>
        <h1 className="text-4xl font-semibold" >Get started with coding</h1>
        <p className="text-base text-white">The most intuitive platform</p>
        <button className="text-xl bg-[#FA793F] p-2 rounded-xl text-white font-semibold">Continue</button>
      </div>
      <div>
        <img src="../images/human.png" alt="Person pointing" />
      </div>
    </div>
  );
};

export default PostloginCard;
