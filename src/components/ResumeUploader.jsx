import { useRef } from "react";

const ResumeUploader = () => {
  const fileInputRef = useRef(null);

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="max-w-sm px-6 py-4 bg-white border border-gray-300 rounded-md ">
      <h2 className="mx-6 text-lg font-semibold text-gray-900 mb-2">
        Upload Ideal Candidate Resume
      </h2>

      <div className="h-30 w-80 border-2 border-dashed border-blue-400 rounded-md p-2 flex flex-col items-center">
        <p className="text-gray-500 mb-2">Drag & Drop a File</p>
        <p className="text-gray-500 mb-4">or</p>

        <button
          onClick={handleFileButtonClick}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
        >
          Choose a File
        </button>

        <input type="file" ref={fileInputRef} style={{ display: "none" }} />
      </div>
    </div>
  );
};

export default ResumeUploader;
