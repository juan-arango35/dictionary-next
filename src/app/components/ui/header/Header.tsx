"use client";

import { LuBookMinus } from "react-icons/lu";

import ButtonTheme from "../buttonTheme/ButtonTheme";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { useTheme } from "next-themes";

const HeaderComponent = () => {
  const { theme } = useTheme();
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
          {theme === "light" ? (
            <LiaToggleOffSolid size={30} />
          ) : (
            <LiaToggleOnSolid size={30} />
          )}

          <ButtonTheme />
        </span>
      </div>
    </div>
  );
};

export default HeaderComponent;
