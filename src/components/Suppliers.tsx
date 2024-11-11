import React from 'react';
import { suppliers } from '../data/mockData';

export default function Suppliers() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Suppliers</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add supplier
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Address</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Telephone</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Opening Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {suppliers.map((supplier) => (
                    <tr key={supplier.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{supplier.name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{supplier.contacts}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{supplier.telephone}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {supplier.opening_balance ? `KES ${supplier.opening_balance.toLocaleString()}` : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}