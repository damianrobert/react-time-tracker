import ellipsis from "../assets/images/icon-ellipsis.svg";

export default function Card(props) {
  console.log(props);
  return (
    <div className="relative md:w-[240px] md:h-[250px] ">
      <div
        className={`${props.background} w-[${props.width}] h-[${props.height}] rounded-[10px] relative md:w-full`}
      >
        <img
          src={props.svg}
          alt={`${props.category} image`}
          className="absolute right-[5px] "
        />
        <div
          className={`bg-[#1c1f4a] w-[${props.width}] h-[${props.height}] rounded-[10px] 
        absolute top-[50px] flex md:w-[240px] hover:bg-[#303363] hover:cursor-pointer `}
        >
          <div className="w-[50%] px-[10px] py-[20px]">
            <h2 className="text-white text-[25px] md:text-[16px] ">
              {props.category}
            </h2>
            <span className="text-white text-[40px] font-light md:text-[50px] ">
              {props.currentHrs}
            </span>
          </div>

          <div className="w-[50%] text-white px-[10px] py-[20px] realtive">
            <img
              src={ellipsis}
              alt=""
              className="absolute top-[30px] right-[40px] w-[30px]"
            />
            <p className="absolute top-[70px] right-[40px] text-[18px] md:top-[120px] md:left-[10px] md:text-[16px] ">
              Last Week - {props.lastWeek}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
