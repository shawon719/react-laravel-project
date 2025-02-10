import { FaSearch, FaRegFileAlt, FaCalendarAlt, FaSortUp, FaSortDown, FaEye } from "react-icons/fa";
import { useState } from "react";

const NoticeBoard = () => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">Notice Board</h2>

      {/* Top Section: Show Entries & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        {/* Show Entries */}
        <div className="flex items-center space-x-2 text-gray-600">
          <span>Show</span>
          <select className="border p-1 rounded">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span>entries</span>
        </div>

        {/* Search Box */}
        <div className="flex items-center border rounded-lg px-3 py-1 bg-gray-100">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("sl")}>
                SL No {sortColumn === "sl" && (sortOrder === "asc" ? <FaSortUp className="inline" /> : <FaSortDown className="inline" />)}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("date")}>
                <div className="flex items-center space-x-1">
                  <FaCalendarAlt className="text-gray-500" />
                  <span>Date</span>
                  {sortColumn === "date" && (sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />)}
                </div>
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("name")}>
                <div className="flex items-center space-x-1">
                  <FaRegFileAlt className="text-gray-500" />
                  <span>Notice Name</span>
                  {sortColumn === "name" && (sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />)}
                </div>
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("preview")}>
                <div className="flex items-center space-x-1">
                  <FaEye className="text-gray-500" />
                  <span>Preview</span>
                  {sortColumn === "preview" && (sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />)}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
        <span>Showing 0 to 0 of 0 entries</span>
        <div className="flex space-x-3">
          <button className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200">Previous</button>
          <button className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200">Next</button>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
