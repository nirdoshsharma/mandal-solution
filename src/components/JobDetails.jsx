import { useState } from "react";
import Requirements from "./Requirements";
import { jobTitles } from "../data/jobTitles";
import Select from "react-select";
import { skills } from "../data/skills";

const JobDetails = () => {
  const [activeTab, setActiveTab] = useState("JobDetails");
  const [selectedJobTitles, setSelectedjobTitles] = useState([]);
  const jobOptions = jobTitles.map((jobTitle) => ({
    label: jobTitle,
    value: jobTitle,
  }));
  const [selectedSkills, setSelectedSkills] = useState([]);
  const skkillsOptions = skills.map((skill) => ({
    label: skill,
    value: skill,
  }));
  return (
    <div className="w-full my-6 mx-auto max-w-3xl bg-white px-6 py-8 rounded-lg ">
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab("JobDetails")}
          className={`px-6 py-2 text-sm  rounded-l-full shadow transition-all duration-200 ${
            activeTab === "JobDetails"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-blue-500 hover:bg-gray-300"
          }`}
        >
          Job Details
        </button>
        <button
          onClick={() => setActiveTab("Requirements")}
          className={`px-6 py-2 text-sm rounded-r-full shadow transition-all duration-200 ${
            activeTab === "Requirements"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-blue-500 hover:bg-gray-300"
          }`}
        >
          Requirements
        </button>
      </div>

      {activeTab === "JobDetails" && (
        <div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Name
            </label>
            <input
              type="text"
              placeholder="Enter project name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-5">
              Job Description
            </label>
            <input
              type="text"
              placeholder="Enter Job Discription"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title
            </label>
            <Select
              isMulti
              options={jobOptions}
              value={selectedJobTitles}
              onChange={setSelectedjobTitles}
              placeholder="Select companies..."
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills Required
            </label>

            <Select
              isMulti
              options={skkillsOptions}
              value={selectedSkills}
              onChange={setSelectedSkills}
              placeholder="Select Skills."
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>

          <div className="grid grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="City, State"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zip Code
              </label>
              <input
                type="text"
                placeholder="Enter zip code"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Miles
              </label>
              <input
                type="number"
                placeholder="Enter miles"
                min="0"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work Experience (Years)
              </label>
              <input
                type="number"
                placeholder="Years"
                min="0"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work Experience (Months)
              </label>
              <input
                type="number"
                placeholder="Months"
                min="0"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === "Requirements" && <Requirements />}
    </div>
  );
};

export default JobDetails;
