import React from "react";

const Table = ({ data }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              create_at
            </th>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              address
            </th>
            <th scope="col" className="px-6 py-3">
              phone_number
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, address, phone_number, create_at }) => (
            <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {id}
              </th>
              <td className="px-6 py-4">{create_at}</td>
              <td className="px-6 py-4">{name}</td>
              <td className="px-6 py-4">{address}</td>
              <td className="px-6 py-4">{phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
