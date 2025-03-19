"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa6";

export default function ButtonTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evita el error de hidratación

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="p-2 rounded-md bg-gray-20"
    >
      {resolvedTheme === "light" ?  <FaMoon size={30}/>:<FaRegMoon size={30} /> }
    </button>
  );
}
