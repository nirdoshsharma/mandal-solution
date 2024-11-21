import { useState } from "react";
import { candidateData } from "../data/candidates";
useState;
const Candidates = () => {
  const [activeTab, setActiveTab] = useState("GoodFit");

  const filteredCandidates = () => {
    switch (activeTab) {
      case "Contacted":
        return candidateData.filter(
          (candidate) => candidate.status === "contacted"
        );
      case "Replied":
        return candidateData.filter(
          (candidate) => candidate.status === "replied"
        );
      default:
        return candidateData.filter(
          (candidate) => candidate.status === "goodFit"
        );
    }
  };

  return (
    <div className="p-4 bg-white w-full max-w-md mx-auto mb-6   ">
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "GoodFit"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("GoodFit")}
        >
          Good Fit ({candidateData.filter((c) => c.status === "goodFit").length}
          )
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "Contacted"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Contacted")}
        >
          Contacted (
          {candidateData.filter((c) => c.status === "contacted").length})
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "Replied"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Replied")}
        >
          Replied ({candidateData.filter((c) => c.status === "replied").length})
        </button>
      </div>
      <div className="space-y-4 overflow-y-auto  mx2">
        {filteredCandidates().map((candidate, index) => (
          <div key={index} className="flex items-center p-3  ">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full text-gray-700 font-bold">
              {candidate.initials}
            </div>

            <div className="ml-4">
              <p className="text-sm font-medium text-gray-800">
                {candidate.name}
              </p>
              <p className="text-xs text-gray-500">
                {candidate.role} @ {candidate.company}
              </p>
              <p className="text-xs text-gray-500">{candidate.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Candidates;
