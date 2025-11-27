import React from "react";
import {
  BookOpenIcon,
  CheckBadgeIcon,
  ChartBarIcon,
  UserGroupIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { Card, CardDescription, CardContent } from "./ui/card";

const gains = [
  {
    id: 1,
    icon: <BookOpenIcon className="h-8 w-8 text-[#B2C5F7]" />,
    title: "Structred learning path",
    paragraph:
      "follow a clear ste  by step curriculum designed to build your skill from ground up ",
    backGround: "#d9e2fb ",
  },
  {
    id: 2,
    icon: <UserGroupIcon className="h-8 w-8 text-[#73CA70]" />,
    title: "Expert Mentorship",
    paragraph:
      "follow a clear ste  by step curriculum designed to build your skill from ground up ",
    backGround: "#d5efd4 ",
  },
  {
    id: 3,
    icon: <UserGroupIcon className="h-8 w-8 text-[#ddff76]" />,
    title: "Focused Skill Building",
    paragraph:
      "follow a clear ste  by step curriculum designed to build your skill from ground up ",
    backGround: "#f9ffe8 ",
  },
  {
    id: 4,
    icon: <ChartBarIcon className="h-8 w-8 text-[#E5B5FC]" />,
    title: "Career Growth",
    paragraph:
      "follow a clear ste  by step curriculum designed to build your skill from ground up ",
    backGround: "#f7e9fe ",
  },
  {
    id: 33,
    icon: <UserGroupIcon className="h-8 w-8  text-[#FDFF9A]" />,
    title: "Supportive Community",
    paragraph:
      "follow a clear ste  by step curriculum designed to build your skill from ground up ",
    backGround: " #fffff5",
  },
  {
    id: 133,
    icon: <CheckBadgeIcon className="h-8 w-8 text-[#F38D79]" />,
    title: "Certification",
    paragraph:
      "follow a clear ste  by step curriculum designed to build your skill from ground up ",
    backGround: "#fbddd7 ",
  },
];
function Gain() {
  return (
    <section className="max-w-[1440px] m-auto my-16 p-6  ">
      <div className="text-center ">
        <h2 className="text-2xl lg:text-[34px] font-semibold pb-2">
          What you'll gain
        </h2>
        <p className="text-sm lg:text-[20px] text-[#444]">
          More than just courses - a complete transform of your tech career
        </p>
      </div>

      {/* GAIN SECOND CHILD */}
      <div className="mt-12 grid gap-6 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
        {gains.map((gain) => {
          return (
            <Card
              key={gain.id}
              className="flex flex-col justify-center items-center gap-2 lg:gap-2 px-2 py-6 rounded-none"
            >
              <CardDescription className=" flex flex-col items-center justify-center  gap-1 ">
                <span
                  className="rounded-sm p-2"
                  style={{ backgroundColor: gain.backGround }}
                >
                  {gain.icon}
                </span>
                <h2 className="text-xl lg:text-[22px] font-semibold">
                  {gain.title}
                </h2>
              </CardDescription>

              <CardContent>
                <p className="text-center">{gain.paragraph}</p>
              </CardContent>
            </Card>
            // <div key={gain.id}>
            //   <div className=" flex flex-col items-center border-2 border-red-600  w-full p-4">
            //     <span
            //       className="p-2 rounded-sm"
            //       style={{ backgroundColor: gain.backGround }}
            //     >
            //       {gain.icon}
            //     </span>
            //     <h2>{gain.title}</h2>
            //     <p className="text-center">{gain.paragraph}</p>
            //   </div>
            // </div>
          );
        })}
      </div>
    </section>
  );
}

export default Gain;
