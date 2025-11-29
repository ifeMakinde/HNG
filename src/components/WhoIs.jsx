import React from "react";
import { BookOpenIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function WhoIs() {
  return (
    <section className="max-w-[1440px] m-auto my-16 p-6 ">
      <div className="text-center">
        <h2 className="text-2xl lg:text-[34px] font-semibold pb-2">
          Who is HNG learn for?
        </h2>
        <p className="text-sm lg:text-[20px] text-[#444] ">
          program is perfect for anyone ready to commit to their tech journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <Card className="flex flex-col justify-center items-center gap-2 lg:gap-4 px-2 py-6">
          <CardDescription className="flex flex-col items-center gap-2">
            <BookOpenIcon className="size-8 text-[#33beff]" />
            <h2 className="text-xl lg:text-[22px] font-semibold text-black">
              Former HNG Interns
            </h2>
          </CardDescription>

          <CardContent className="text-center">
            <p className="text-[#444] text-sm lg:text-[18px]">
              If you exited during the groip stage of the HNG internship, thiis
              is your chance to continue to continue learning the fundamentals
              at your own pace
            </p>
          </CardContent>
        </Card>

        {/* CARD 2 */}

        <Card className="flex flex-col justify-center items-center gap-2 lg:gap-4 px-2 py-6">
          <CardDescription className="flex flex-col items-center gap-2">
            <BookOpenIcon className="size-8 text-[#33beff]" />
            <h2 className="text-xl lg:text-[22px] font-semibold text-black">
              Tech Beginners
            </h2>
          </CardDescription>

          <CardContent className="text-center">
            <p className="text-[#444] text-sm lg:text-[18px]">
              If you exited during the groip stage of the HNG internship, thiis
              is your chance to continue to continue learning the fundamentals
              at your own pace
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default WhoIs;
