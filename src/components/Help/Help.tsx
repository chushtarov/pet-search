import React, { useState } from "react";
import { qHelp } from "../../../public/facaBD/faceBD";

const FaqItem = ({ question, answer, answerTwo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleOpen}
      style={{ cursor: "pointer" }}
      className="w-[1200px] m-auto rounded-lg bg-slate-200 my-10 p-5 hover:bg-[#eae8e7] "
    >
      <div>
        <h3 className="text-[26px]">{question}</h3>
      </div>
      {isOpen && (
        <>
          <p className="mt-5 text-justify">{answer}</p>
          <p className="mt-2 text-justify">{answerTwo}</p>
        </>
      )}
    </div>
  );
};

const Help = () => {
  return (
    <div className="w-[1200px] m-auto ">
      <h1 className="mt-10 text-[45px]">Часто задаваемые вопросы</h1>
      {qHelp.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          answerTwo={item.answerTwo}
        />
      ))}
    </div>
  );
};

export default Help;
