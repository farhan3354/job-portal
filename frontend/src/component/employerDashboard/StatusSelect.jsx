import React from 'react'

export default function StatusSelect({value}) {
  return (
    <div>
         <select
      value={value}
      className={`px-3 py-1 text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        value === "Active"
          ? "bg-green-100 text-green-700"
          : value === "Closed"
          ? "bg-gray-100 text-gray-700"
          : "bg-blue-100 text-blue-700"
      }`}
    >
      <option value="Active">Active</option>
      <option value="Pending">Pending</option>
    </select>
    </div>
  )
}