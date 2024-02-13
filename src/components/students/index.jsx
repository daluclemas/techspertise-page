"use client";

import * as components from "@/components";
import { PiPlusBold } from "react-icons/pi";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import TableFilter from "../table/TableFilter";
import { dashCard } from "@/utils/appdata";

const StudentComponent = () => {
  return (
    <main className="lg:bg-buttonColor min-h-screen overflow-hidden">
      <components.Sidebar />
      <components.MobileNavbar />
      <section className="bg-white main-wrap lg:relative lg:w-[calc(100%-280px)] lg:left-[280px] min-h-screen">
        <div className="w-[90%] mx-auto py-6 mt-[100px] lg:mt-0">
          <div className="flex justify-between items-center gap-3">
            <div className="w-fit">
              <h1 className=" text-headingText font-semibold text-2xl md:text-3xl">
                Students
              </h1>
              <p className="text-customGray500  mt-3 text-base max-w-[350px] lg:max-w-[unset] w-full">
                View and manage all your students from this portal
              </p>
            </div>

            <div className="w-fit">
              <div className="hidden lg:block w-[140px] h-[43px] bg-buttonColor rounded-md overflow-hidden">
                <button className="w-full h-full bg-transparent text-white text-sm flex items-center justify-center ">
                  <PiPlusBold className="text-white text-lg" />
                  &nbsp;Add Student
                </button>
              </div>
              <div className="lg:hidden w-[50px] h-[43px] bg-buttonColor rounded-md overflow-hidden">
                <button className="w-full h-full bg-transparent text-white text-sm flex items-center justify-center ">
                  <PiPlusBold className="text-white text-2xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6 mt-8">
            {dashCard.map((card, i) => (
              <components.DashCard
                key={i}
                title={card.title}
                total={card.total}
              />
            ))}
          </div>

          <div className="mt-8 border border-customGray200 rounded-lg">
            <TableFilter />
            <components.StudentDataTable />
          </div>

          <div className=" hidden sm:flex justify-center mt-5 w-[90%] mx-auto ">
            <ReactPaginate
              breakLabel="..."
              nextLabel={
                <>
                  <button className=" items-center gap-1 w-full px-3 border-0 flex">
                    Next
                    <FaArrowRight />
                  </button>
                </>
              }
              onPageChange={() => 5}
              pageRangeDisplayed={3}
              pageCount={Math.ceil(100 / 10)}
              previousLabel={
                <>
                  <button className="items-center gap-1 w-full px-3  flex">
                    <FaArrowLeft /> Previous
                  </button>
                </>
              }
              renderOnZeroPageCount={null}
              className="flex border-2 border-customGray300 rounded-lg paginator-wrapper justify-center text-sm font-semibold text-fontColor"
            />
          </div>

          <div className="mt-5 w-[90%] mx-auto sm:hidden">
            <ReactPaginate
              breakLabel="..."
              nextLabel={<FaArrowRight />}
              onPageChange={() => 5}
              pageRangeDisplayed={1}
              pageCount={Math.ceil(100 / 10)}
              previousLabel={<FaArrowLeft />}
              renderOnZeroPageCount={null}
              className="flex border-2 border-customGray300 rounded-lg paginator-wrapper justify-center text-sm font-semibold text-fontColor"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default StudentComponent;
