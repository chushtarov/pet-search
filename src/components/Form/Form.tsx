import React from "react";
import img from "../../../public/subscribe.png";

const Form = () => {
  return (
    <div className="bg-[#a1e0ff] h-[340px]">
      <div className="w-[1200px] m-auto flex justify-between items-center">
        <div>
          <h1 className="text-[45px]  my-5">Подпишитесь на новости</h1>
          <p className="my-5">И будьте в курсе всех событий из мира технологий</p>
          <form action="">
            <input type="email" name="" placeholder="Ваш email" id="" />
            <button>Подписаться</button>
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
