import React from "react";

function Footer() {
  return (
    <footer className="max-w-full m-auto pt-20 pb-10 bg-black mt-12">
      {/* FIRST CHILD FOOTER CONTAINER */}
      <div className=" flex gap-8 md:gap-0 flex-col md:flex-row justify-between items-start lg:justify-evenly mb-20 text-white p-4 ">
        {/* Talent */}
        <div className="flex flex-col gap-2 items-start">
          <h3 className="uppercase font-bold text-xl lg:text-24px tracking-widest  ">
            For talent
          </h3>
          {/* would link to actualpages in a real app */}
          <a href="">HNG Learn</a>
          <a href="">HNG Internship</a>
          <a href="">HNG Network</a>
          <a href="">HNG Talent</a>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2 justify-center items-start">
          <h3 className="uppercase font-bold text-xl lg:text-24px tracking-wider ">
            For company
          </h3>
          {/* Same as in the talent above */}
          <a>HNG Talents</a>
        </div>

        {/* LEGAL */}
        <div className="flex flex-col gap-2 justify-center items-start">
          <h3 className="uppercase font-bold text-xl lg:text-24px tracking-wider ">
            Legal
          </h3>
          {/* same as  */}
          <a href="">Privacy policy</a>
          <a href="">Cookie policy</a>
          <a href="">Terms of service</a>
        </div>

        {/* SUPPORT */}
        <div className="flex flex-col gap-2 justify-center items-start">
          <h3 className="uppercase font-bold text-xl lg:text-24px tracking-wider ">
            Support
          </h3>

          <a href="">Blogs</a>
          <a href="">Help Center</a>
          <a href="">FAQs</a>
        </div>
      </div>

      {/*  CHILD 2 */}

      <div className="text-white">
        <span className="border-b flex justify-between items-center mx-5 lg:mx-20">
          <p>&copy; 2025 Ife Makinde. All rights reserved</p>
          <ul className="flex gap-2 justify-center px-2">
            <a href="">
              <gitHub />
            </a>
            <a href="">
              <gitHub />
            </a>
            <a href="">
              <gitHub />
            </a>
          </ul>
        </span>
        <h1 className="text-4xl lg:text-[3rem] text-center font-bold tracking-wider">
          HNG : Empowering Tech
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
