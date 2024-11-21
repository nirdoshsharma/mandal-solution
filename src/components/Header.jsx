import { Notification, ToggleOn } from "./icons";
import profile from "../assets/profile.jpg";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <img src={logo} alt="Profile" className="w-10 h-10 rounded-full" />

      <div className="text-xl font-bold text-gray-800 mx-3">mAI</div>

      <div className="flex-1 flex justify-center">
        <div className="flex space-x-8">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 border-b-2 border-black font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            <button className="text-gray-600 hover:text-gray-900">Home</button>
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 border-b-2 border-black font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            Project
          </NavLink>
          <NavLink
            to="/searchcandidate"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 border-b-2 border-black font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            Search Candidate
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 border-b-2 border-black font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            Reports
          </NavLink>
          <NavLink
            to="/message"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 border-b-2 border-black font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            Messages
          </NavLink>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button>
          <ToggleOn />
        </button>
        <button>
          <Notification />
        </button>

        <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
