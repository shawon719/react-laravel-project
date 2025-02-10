import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";


// import { Input } from "@/components/ui/input";

const BranchList = () => {
  const [search, setSearch] = useState("");
  const branches = [
    "Dhaka Branch",
    "Chittagong Branch",
    "Sylhet Branch",
    "Khulna Branch",
    "Rajshahi Branch",
  ];

  const filteredBranches = branches.filter((branch) =>
    branch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Branch List</h2>
      <Input
        type="text"
        placeholder="Search for a branch..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 border p-2 w-full rounded-md"
      />
      <Card>
        <CardContent className="p-4">
          <ul>
            {filteredBranches.map((branch, index) => (
              <li key={index} className="p-2 border-b">
                {branch}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default BranchList;
