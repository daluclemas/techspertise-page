import Table from "react-bootstrap/Table";
import { IoMdCheckmark, IoMdMore } from "react-icons/io";
import { tableData } from "@/utils/appdata";

const StudentData = () => {
  return (
    <div className="w-full max-h-[500px]">
      <Table responsive>
        <thead>
          <tr className="bg-customGray200">
            <td colSpan={4}>
              <div className="flex items-center gap-3 w-fit whitespace-nowrap">
                <input
                  type="checkbox"
                  className="accent-buttonColor"
                  id="description"
                />
                <label
                  htmlFor="description"
                  className="capitalize text-customGray500 text-sm font-medium"
                >
                  description
                </label>
              </div>
            </td>
            <td colSpan={4}>
              <p className="capitalize text-customGray500 text-sm font-medium whitespace-nowrap">
                course
              </p>
            </td>
            <td colSpan={4}>
              <p className="capitalize text-customGray500 text-sm font-medium whitespace-nowrap">
                date joined
              </p>
            </td>
            <td colSpan={4}>
              <p className="capitalize text-customGray500 text-sm font-medium whitespace-nowrap">
                cohort
              </p>
            </td>
            <td colSpan={4}>
              <p className="capitalize text-customGray500 text-sm font-medium whitespace-nowrap">
                status
              </p>
            </td>
            <td colSpan={4}></td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            const { name, course, date, cohort, status } = data;
            return (
              <tr key={index}>
                <td colSpan={4}>
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="accent-buttonColor"
                      id="student-1"
                    />
                    <label
                      htmlFor="description"
                      className="capitalize text-black text-base font-medium"
                    >
                      {name}
                    </label>
                  </div>
                </td>
                <td colSpan={4}>
                  <p className="capitalize text-customGray500 text-base font-medium whitespace-nowrap">
                    {course}
                  </p>
                </td>
                <td colSpan={4}>
                  <p className="capitalize text-customGray500 text-base font-medium whitespace-nowrap">
                    {date}
                  </p>
                </td>
                <td colSpan={4}>
                  <p className="capitalize text-customGray500 text-base font-medium whitespace-nowrap">
                    cohort {cohort}
                  </p>
                </td>
                <td colSpan={4}>
                  <span
                    className={`flex items-center gap-1 justify-center px-2 py-1 rounded-2xl capitalize text-sm whitespace-nowrap ${
                      status
                        ? "bg-activeGreen text-activeGreenText"
                        : "bg-inactiveYellow text-warningText"
                    }`}
                  >
                    <IoMdCheckmark /> {status ? "Active" : "Inactive"}
                  </span>
                </td>
                <td colSpan={4}>
                  <button className="text-customGray500 text-2xl font-medium">
                    <IoMdMore />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentData;
