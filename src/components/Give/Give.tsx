import React from "react";
import { givePet } from "../../../public/facaBD/faceBD";

const Give = () => {
  return (
    <div className="w-[1200px] bg-slate-400 m-auto">
      <h1>Хочешь себе питомца?</h1>
      <ul className="flex flex-wrap justify-between p-2 w-[1200px]">
        {givePet.map((item, i) => {
          return (
            <li key={i} className="w-[550px] cursor-pointer mb-2 flex bg-slate-100 ">
              <span className="w-[300px] p-1">
                <img src={item.img} alt="cat" />
              </span>
              <span>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.map}</p>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Give;
