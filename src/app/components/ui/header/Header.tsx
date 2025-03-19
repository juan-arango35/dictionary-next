import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { LuBookMinus } from "react-icons/lu";
import { RxSwitch } from "react-icons/rx";
import ButtonTheme from "../buttonTheme/ButtonTheme";

const HeaderComponent = () => {
  return (
    <div className="flex justify-between items-center p-4 w-[28rem] sm:w-[40rem] lg:w-[50rem] ">
      <span>
        <LuBookMinus size={30} />
      </span>
      <div className="flex justify-center items-center">
        <span>
          <span className="mr-5">Serif</span>
          <select name="" id="" className="mr-5">
            <option value="Serif"></option>
          </select>
        </span>
        <span className="flex justify-center items-center gap-5">
          <RxSwitch size={30} />

          <ButtonTheme />
        </span>
      </div>
    </div>
  );
};

export default HeaderComponent;
