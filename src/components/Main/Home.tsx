import React, {FC} from "react";
import dog from '../../../public/dog.svg'
import cat from '../../../public/cat.svg'

const Home: FC = () => {
  return (
    <div className="">
      {/* <div>
        <h1>Умный поиск домашних животных</h1>
        <h3>Найди питомца по фотографии</h3>
      </div> */}
      
      <div className="flex w-[1260px] justify-between m-auto"> 
        <div className="flex items-center w-[600px] h-[243px] px-[25px] bg-stone-100 rounded-lg">
          <img  src={dog} alt="dog" />
          <div className="w-[50%] ml-14">
            <h4 className="text-[29px]">Мой питомец потерялся</h4>
            <p className="text-[16px]">Создать объявление о пропаже питомца, чтобы все увидели</p>
            <button className="rounded-full w-[100%] text-white font-bold uppercase h-[43px] my-4 bg-amber-400">Создать объявление</button>
          </div>
        </div>
        <div className="flex items-center h-[243px] w-[600px] px-[25px] bg-stone-100 rounded-lg">
          <img src={cat} alt="cat" />
          <div className="w-[50%] ml-14">
            <h4 className="text-[29px]">Найден чужой питомец</h4>
            <p className="text-[16px]">Вы нашли чужого питомца и хотите разместить объявление</p>
            <button className="rounded-full w-[100%] text-white font-bold uppercase h-[43px] my-4 bg-amber-400">Создать объявление</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
