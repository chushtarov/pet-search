import React from "react";
import img from "../../../public/subscribe.png";

const Form = () => {
  return (
    <div className="bg-[#00876d] h-[340px] mt-12">
      <div className="w-[1200px] m-auto flex justify-between items-center">
        <div className="text-white">
          <h1 className="text-[45px]  my-5">Подпишитесь на новости</h1>
          <p className="my-5">И будьте в курсе всех событий из мира технологий</p>
          <form action="" className="flex">
            <input className='px-5 text-black w-[473px] h-[50px] rounded-lg' type="email" name="" placeholder="Ваш email" id="" />
            <button className="-ml-10 w-[173px] uppercase h-[50px] text-white bg-[#f9961e] rounded-full text-sm hover:bg-[#fff] hover:text-[#f9961e] hover:border-orange-400 hover:border">Подписаться</button>
          </form>
        </div>
        <div >
          <img className="w-[335px]" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Form;
