import Candidates from "./Candidates";
import Clients from "./Clients";
import JobDetails from "./JobDetails";
import Recruiter from "./Recruter";
import ResumeUploader from "./ResumeUploader";

const Project = () => {
  return (
    <div className="flex justify-between items-start p-5 gap-6 bg-blue-50">
      <div className="flex w-[65%] bg-white rounded-lg shadow-md p-4">
        <JobDetails />
      </div>

      <div className="flex flex-col w-[30%] space-y-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <ResumeUploader />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <Clients />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <Recruiter />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <Candidates />
        </div>
      </div>
    </div>
  );
};

export default Project;
