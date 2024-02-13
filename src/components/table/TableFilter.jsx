import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import * as components from "@/components";
import { CiSearch } from "react-icons/ci";
import { MdFilterList } from "react-icons/md";

const TableFilter = () => {
  return (
    <section className="flex items-center p-3 justify-between overflow-x-auto flex-nowrap flex-shrink-0">
      <div className="w-[1000px] lg:w-full ">
        <div className="flex items-center justify-between gap-5">
          <ButtonGroup
            aria-label="Basic example"
            className="rounded-lg border-customGray500"
          >
            <Button variant="secondary" className="text-fontColor">
              View all
            </Button>
            <Button variant="secondary" className="text-fontColor">
              Cohort
            </Button>
            <Button variant="secondary" className="text-fontColor">
              Course type
            </Button>
          </ButtonGroup>

          <div className="w-1/2 flex items-center gap-3 justify-end">
            <components.InputWithLeftIcon className="w-[400px] bg-transparent overflow-hidden rounded-lg h-[40px] flex items-center px-3 text-customGray500 border border-customGray300">
              <CiSearch />
            </components.InputWithLeftIcon>

            <div className="h-[40px] w-[102px] border border-customGray300 overflow-auto rounded-md text-fontColor">
              <button className="w-full h-full flex items-center justify-center gap-2">
                <MdFilterList />
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableFilter;
