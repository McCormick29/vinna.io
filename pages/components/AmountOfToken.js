import React from "react";
import { getAccountTokenHolds } from "../utils/eth_api";
import { ChartPieIcon, LocationMarkerIcon, CurrencyDollarIcon } from '@heroicons/react/solid'

export const AmountOfToken = ({ account, token, tokenName }) => {
    const amount = getAccountTokenHolds(account, token)
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md mt-1">
      <ul role="list" className="divide-y divide-gray-200">
          <li key={token}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-600 truncate">{tokenName}</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                      {amount}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        $403.22
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <ChartPieIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                       10,000,000 max
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <p>
                    onx.finance
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
      </ul>
    </div>
  );
};
