import { FiPlayCircle } from "react-icons/fi";

const AudioPlayer = () => {
  return (
    <div className=" flex justify-between items-center my-3 w-[21rem] sm:w-[33rem] lg:w-[43rem]">
      <div className="flex flex-col justify-center  w-full pl-5 pr-5">
        <span className="font-bold text-2xl">keyboard</span>
        <span className="mt-2.5 text-purple-600">latin</span>
      </div>
      <FiPlayCircle className="mr-3.5" size={30}/>
    </div>
  );
};

export default AudioPlayer;
