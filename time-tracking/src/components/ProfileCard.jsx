import profilePicture from "../assets/images/image-jeremy.png";

export default function ProfileCard(props) {
  return (
    <div className="w-[410px] mx-auto md:w-[270px] md:mr-[20px] md:ml-[100px] ">
      <div
        className="bg-[#1c1f4a] w-[auto] h-[270px] 
      rounded-[10px] relative mb-[30px] md:h-[530px]"
      >
        <div
          className="bg-[#5847eb] w-[410px] h-[200px] 
        rounded-[10px] px-[25px] py-[30px] relative mb-[20px] md:h-[350px]
        md:w-[auto] 
        "
        >
          <img
            src={profilePicture}
            alt="profilePicture"
            className="w-[70px] border-[3px] border-white rounded-[50%]
            md:w-[100px]
            "
          />
          <p
            className=" absolute left-[100px] top-[40px] text-white
          md:top-[170px] md:left-[30px]
          "
          >
            Report for
          </p>
          <h1
            className="absolute left-[100px] top-[65px] text-[25px] h-[100px]
           font-[300] text-white md:top-[200px] md:left-[30px] md:text-[30px]
          "
          >
            Jeremy Robson
          </h1>
        </div>
        <div className="w-[410px] flex justify-center space-x-[30px] ">
          <span
            className=" text-[22px] text-white
         hover:cursor-pointer hover:text-[#808080] md:absolute md:left-[30px]  "
          >
            Daily
          </span>
          <span
            className=" text-[22px] text-white
         hover:cursor-pointer hover:text-[#808080] md:absolute md:right-[165px] md:bottom-[70px] "
          >
            Weekly
          </span>
          <span
            className=" text-[22px] text-white
         hover:cursor-pointer hover:text-[#808080] md:absolute md:right-[150px] md:bottom-[20px] "
          >
            Monthly
          </span>
        </div>
      </div>
    </div>
  );
}
