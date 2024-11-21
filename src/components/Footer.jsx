const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-50 shadow-md p-4 flex justify-end items-center border-t space-x-4">
      <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
        Cancel
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Save
      </button>
    </div>
  );
};

export default Footer;
