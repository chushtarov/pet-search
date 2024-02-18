import React, { useState } from "react";
import AboutSerch from "../AboutSerch/AboutSerch";
import {advantage} from '../../../public/facaBD/faceBD'

const About = () => {
 
  return (
    <div className="w-[1200px] m-auto">
      <h1 className="text-[45px] my-6 font-semibold">О проекте</h1>
      <div className="flex justify-between bg-slate-100 p-10 rounded-lg">
        <div className="w-[600px] text-[45px] ">
          <h1 className="font-semibold">О технологии</h1>
        </div>
        <div className="text-[19px] text-justify">
          <p className="mb-3">
            Технология идентификации домашних животных по фото базируется на
            искусственном интеллекте. Для того, чтобы воспользоваться
            технологией, нужно сделать фотографию питомца на обычный смартфон.{" "}
          </p>
          <p className="mb-3">
            Чтобы технология работала правильно, голова питомца должна быть
            расположена в кадре прямо (анфас). Допускается небольшой поворот или
            наклон головы, но должны быть видны оба глаза и уха питомца, нос и
            пасть.
          </p>
          <p className="mb-3">
            Не подходят фото, где морда питомца чем-либо закрыта (намордник,
            ограждение/сетка, другие предметы).
          </p>
          <h3 className="border-l-4 h-8 pl-2 text-[20px] font-semibold border-blue-600 mb-3">
            В настоящее время технология работает только для идентификации собак
            и кошек.
          </h3>
          <p className="mb-3">
            Нейронная сеть занимается детекцией, то есть, обнаружением на
            фотографии питомца, умеет «выделять» его на снимке среди других
            объектов, а также определяет угол поворота головы.{" "}
          </p>
          <p className="mb-3">
            Если ракурс позволяет идентифицировать животное, вырезается кусочек
            фото с мордой питомца. Далее строится вектор признаков и
            производится поиск и идентификация собаки или кошки.
          </p>
          <p className="mb-3">
            Наша цель – протестировать работу технологии в реальных условиях,
            продемонстрировать её работоспособность и подготовить базу для
            признания одним из способов идентификации животных.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-semibold text-[45px]">Преимущества</h1>
        <h3 className="text-[29px] mb-6">
          Идентификации животных по фотографии перед другими способами:
        </h3>
        <div className="flex justify-between">
          {advantage.map((item, i) => {
            return (
              <div
                key={i}
                className="w-[370px] h-[265px]  bg-slate-100 p-7 rounded-lg"
              >
                <img src={item.avatar} alt="" />
                <p className="text-[22px] my-3">{item.name}</p>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <AboutSerch/>
    </div>
  );
};

export default About;
