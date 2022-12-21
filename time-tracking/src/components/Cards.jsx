import Card from "../components/Card";
import work from "../assets/images/icon-work.svg";
import exercise from "../assets/images/icon-exercise.svg";
import play from "../assets/images/icon-play.svg";
import selfCare from "../assets/images/icon-self-care.svg";
import social from "../assets/images/icon-social.svg";
import study from "../assets/images/icon-study.svg";
import colors from "../colors.json";

export default function Cards() {
  const variants = {
    work: "#ff8c66",
    play: "#56c2e6",
  };

  return (
    <div
      className=" w-[410px] mx-auto md:grid md:grid-rows-auto md:grid-cols-3 
      md:m-0 md:w-[770px] md:h-[570px] "
    >
      <div className="w-[410px] h-[300px] mb-[30px] md:w-full md:m-0 md:h-[250px]  ">
        <Card
          background="bg-[#ff8c66]"
          svg={work}
          category="Work"
          currentHrs="32hrs"
          lastWeek="36hrs"
          width="410px"
          height="200px"
        />
      </div>

      <div className="w-[410px] h-[300px] mb-[30px] md:w-full md:m-0 md:h-[250px] ">
        <Card
          width="410px"
          height="200px"
          background="bg-[#56c2e6]"
          svg={play}
          category="Play"
          currentHrs="10hrs"
          lastWeek="8hrs"
        />
      </div>

      <div className="w-[410px] h-[300px] mb-[30px] md:w-full md:m-0 md:h-[250px] ">
        <Card
          width="410px"
          height="200px"
          background="bg-[#ff5c7c]"
          svg={study}
          category="Study"
          currentHrs="4hrs"
          lastWeek="4hrs"
        />
      </div>

      <div className="w-[410px] h-[300px] mb-[30px] md:w-full md:m-0 md:h-[250px] ">
        <Card
          width="410px"
          height="200px"
          background="bg-[#4acf81]"
          svg={exercise}
          category="Exercise"
          currentHrs="4hrs"
          lastWeek="5hrs"
        />
      </div>

      <div className="w-[410px] h-[300px] mb-[30px] md:w-full md:m-0 md:h-[250px] ">
        <Card
          width="410px"
          height="200px"
          background="bg-[#7536d3]"
          svg={social}
          category="Social"
          currentHrs="5hrs"
          lastWeek="10hrs"
        />
      </div>

      <div className="w-[410px] h-[300px] mb-[30px] md:w-full md:m-0 md:h-[250px] ">
        <Card
          width="410px"
          height="200px"
          background="bg-[#f1c65b]"
          svg={selfCare}
          category="Self Care"
          currentHrs="2hrs"
          lastWeek="4hrs"
        />
      </div>
    </div>
  );
}
