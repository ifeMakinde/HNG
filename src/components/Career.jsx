import React from "react";
import {
  Card,
  CardAction,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { ArrowTrendingDownIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

// const search = <MagnifyingGlassIcon className="h-6 w-6" />;
const careers = [
  {
    id: 1,
    title: "Product Management ",
    detail: "lead product managment from data to lauch and beyyong",
    icon: <ArrowTrendingDownIcon className="h-6 w-6 text-[#33beff]" />,
  },
  {
    id: 2,
    title: "Frontend Development",
    detail: "lead product managment from data to lauch and beyond",
    icon: <ArrowTrendingDownIcon className="h-6 w-6 text-[#33beff]" />,
  },
  {
    id: 3,
    title: "UI/UX ",
    detail: "lead product managment from data to lauch and beyond",
    icon: <ArrowTrendingDownIcon className="h-6 w-6 text-[#33beff]" />,
  },
  {
    id: 4,
    title: "Backend Development ",
    detail: "lead product managment from data to lauch and beyond",
    icon: <ArrowTrendingDownIcon className="h-6 w-6 text-[#33beff]" />,
  },
  {
    id: 5,
    title: "AI/ML ",
    detail: "lead product managment from data to lauch and beyond",
    icon: <ArrowTrendingDownIcon className="h-6 w-6 text-[#33beff]" />,
  },
  {
    id: 6,
    title: "DevOps ",
    detail: "lead product managment from data to lauch and beyond",
    icon: <ArrowTrendingDownIcon className="h-6 w-6 text-[#33beff]" />,
  },
  {
    id: 7,
    title: " Mobile Development",
    detail: "lead product managment from data to lauch and beyond",
    icon: <ArrowTrendingDownIcon className="h-6 w-6 text-[#33beff]" />,
  },
  {
    id: 86,
    title: "Data Analysis ",
    detail: "lead product managment from data to lauch and beyond",
    icon: <ArrowTrendingDownIcon className="h-6 w-6 text-[#33beff]" />,
  },
  {
    id: 9,
    title: "Video Editing and Content Creation ",
    detail: "lead product managment from data to lauch and beyond",
    icon: <ArrowTrendingDownIcon className="h-6 w-6 text-[#33beff]" />,
  },
];

function Career() {
  const [search, setSearch] = useState("");

  const handleCareerSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  // const filtered = careers.filter((career) =>
  //   career.title.toLowerCase().includes(search.toLowerCase())
  // );
  // const filteredCareer =
  //   search.trim() === "" ? Career : career.title.includes(search.toLowerCase());

  return (
    <section className="flex flex-col gap-15 max-w-[1440px] m-auto mt-10 p-8 border-t">
      <div className="flex flex-col justify-evenly gap-4">
        <h2 className="text-[24px] lg:text-[34px] font-semibold">
          Ready to build the career you want ?
        </h2>
        <p className="lg:text-[18px]">
          our live classes provides the practical skills and hand's on
          experience you need to confidently step in your next role. with expert
          guidance and practical projects, you'll be prepared for the real world
        </p>
        <span className="flex items-center gap-2">
          <input
            type="search"
            name="search"
            id=""
            value={search}
            onChange={handleCareerSearch}
            placeholder={`Find a career or topic`}
            className="w-full p-4 rounded-full border focus:border-black text-[17px] bg-transparent"
          />
          <button
            className="text-white bg-[#33beff] p-3 lg:p-4 capitalize outline-0 rounded-lg hover:cursor-pointer "
            onClick={handleCareerSearch}
          >
            GO
          </button>
        </span>
      </div>

      {/* careers */}
      <div className="grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {careers
          .filter((career) =>
            career.title.toLowerCase().trim().includes(search.toLowerCase())
          )
          .map((career) => (
            <Card key={career.id} className="px-4 ">
              <CardHeader className="p-0">
                <CardTitle>{career.title}</CardTitle>
                <CardDescription>{career.detail}</CardDescription>
              </CardHeader>

              <CardFooter className="flex gap-2 justify-center items-center border rounded-sm border-[#33beff] hover:cursor-pointer">
                <p className="">Learn More</p>
                <span>{career.icon}</span>
              </CardFooter>
            </Card>
          ))}
      </div>
    </section>
  );
}

export default Career;
