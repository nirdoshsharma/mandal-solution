import { recruitersData } from "../data/recruter";
import { MenuVertical, Plus } from "./icons";

const Recruiter = () => {
  return (
    <div className="bg-white ">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recruiters</h3>
        <button className="text-gray-500 text-2xl">
          <Plus />
        </button>
      </div>

      <div className="border-t border-gray-300 mb-4"></div>

      <ul className="max-h-40 overflow-y-auto">
        {recruitersData.map((recruiter, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center font-semibold text-gray-700 mr-3">
                {recruiter.initials}
              </div>
              <span className="text-gray-800">{recruiter.name}</span>
            </div>

            <button className="text-gray-500 text-xl">
              <MenuVertical />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recruiter;
