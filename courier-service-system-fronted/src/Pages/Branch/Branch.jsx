import React, { useState } from "react";

const BranchList = () => {
  const [search, setSearch] = useState("");
  const [activeBranch, setActiveBranch] = useState(null); // Track which branch is expanded

  // Sample branch data with name, code, address, and sub-branches
  const branches = [
    {
      id: 1,
      name: "Dhaka Branch",
      code: "DB001",
      address: "Gulshan, Dhaka",
      subBranches: [
        { name: "Gulshan Sub-Branch", address: "Gulshan 2, Dhaka" },
        { name: "Uttara Sub-Branch", address: "Uttara, Dhaka" },
        { name: "10 Toyenobi Motijheel C/A Dhaka", address: "10 Toyenobi, Motijheel Commercial Area, Motijheel-1000" },
      ],
    },
    {
      id: 2,
      name: "Chittagong Branch",
      code: "CTG002",
      address: "Agrabad, Chittagong",
      subBranches: [
        { name: "Cox's Bazar Sub-Branch", address: "Cox's Bazar" },
        { name: "Mirsharai Sub-Branch", address: "Mirsharai, Chittagong" },
      ],
    },
    {
      id: 3,
      name: "Sylhet Branch",
      code: "SYL003",
      address: "Zindabazar, Sylhet",
      subBranches: [
        { name: "Moulvibazar Sub-Branch", address: "Moulvibazar" },
      ],
    },
    // Add more branches as needed
    { id: 4, name: "Chittagong Branch", code: "CTG002", address: "Agrabad, Chittagong",
      subBranches: [
        { name: "halishohor Sub-Branch", address: "halishohor" },
      ],

     },
  ];

  // Filter branches based on search input
  const filteredBranches = branches.filter(
    (branch) =>
      branch.name.toLowerCase().includes(search.toLowerCase()) ||
      branch.code.toLowerCase().includes(search.toLowerCase()) ||
      branch.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-2xl border">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        🏢 Branch List with Sub-Branches
      </h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="🔍 Search branch name, code, or address..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-5 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      {/* Main Branch Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-gray-50 shadow-md rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Branch Name</th>
              <th className="px-4 py-3 text-left">Branch Code</th>
              <th className="px-4 py-3 text-left">Branch Address</th>
              <th className="px-4 py-3 text-left">Sub-Branches</th>
            </tr>
          </thead>
          <tbody>
            {filteredBranches.length > 0 ? (
              filteredBranches.map((branch, index) => (
                <React.Fragment key={branch.id}>
                  {/* Branch row */}
                  <tr className="border-b hover:bg-gray-100 transition">
                    <td className="px-4 py-3 font-semibold text-gray-700">{index + 1}</td>
                    <td className="px-4 py-3">{branch.name}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-blue-600">{branch.code}</td>
                    <td className="px-4 py-3">{branch.address}</td>
                    <td className="px-4 py-3 text-blue-600 cursor-pointer">
                      <button
                        onClick={() =>
                          setActiveBranch(activeBranch === branch.id ? null : branch.id)
                        }
                        className="underline"
                      >
                        {activeBranch === branch.id ? "Hide Sub-Branches" : "Show Sub-Branches"}
                      </button>
                    </td>
                  </tr>

                  {/* Sub-Branch Table for this Branch */}
                  {activeBranch === branch.id && (
                    <tr>
                      <td colSpan="5" className="px-4 py-3">
                        <table className="w-full bg-gray-100 shadow-md rounded-lg mt-2">
                          <thead className="bg-blue-100 text-gray-700">
                            <tr>
                              <th className="px-4 py-3 text-left">Sub-Branch Name</th>
                              <th className="px-4 py-3 text-left">Sub-Branch Address</th>
                            </tr>
                          </thead>
                          <tbody>
                            {branch.subBranches.map((subBranch, subIndex) => (
                              <tr key={subIndex} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-3">{subBranch.name}</td>
                                <td className="px-4 py-3">{subBranch.address}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-4">
                  ❌ No branches found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BranchList;
