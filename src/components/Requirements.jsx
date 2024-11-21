import Select from "react-select";
import { companies } from "../data/companies";
import { industries } from "../data/industries";
import { boolean } from "../data/boolean";
import { useState } from "react";

const Requirements = () => {
  const companyOptions = companies.map((company) => ({
    label: company,
    value: company,
  }));
  const industriesOptions = industries.map((industry) => ({
    label: industry,
    value: industry,
  }));
  const booleanOptions = boolean.map((search) => ({
    label: search.query,
    value: search.query,
  }));

  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedBooleanSearches, setSelectedBooleanSearches] = useState([]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6">
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Degree
        </label>
        <input
          type="text"
          placeholder="Enter Degree Name"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          University
        </label>
        <input
          type="text"
          placeholder="Enter University Name"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Specialization / Certification
        </label>
        <input
          type="text"
          placeholder="Enter Specialization / Certification Name"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Company
        </label>
        <Select
          isMulti
          options={companyOptions}
          value={selectedCompanies}
          onChange={setSelectedCompanies}
          placeholder="Select companies..."
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Industry
        </label>
        <Select
          isMulti
          options={industriesOptions}
          value={selectedIndustries}
          onChange={setSelectedIndustries}
          placeholder="Select industries..."
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Boolean Search
        </label>
        <Select
          isMulti
          options={booleanOptions}
          value={selectedBooleanSearches}
          onChange={setSelectedBooleanSearches}
          placeholder="Select Boolean Searches..."
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>
    </div>
  );
};

export default Requirements;
