import React from 'react';
import { companyInfo } from '../data';
import { Building2, MapPin, Calendar, Briefcase, Receipt } from 'lucide-react';

export default function CompanyInfo() {
  const details = [
    { label: 'Company Name', value: companyInfo.name, icon: Building2 },
    { label: 'Legal Name', value: companyInfo.legalName, icon: Building2 },
    { label: 'Address', value: companyInfo.address, icon: MapPin },
    { label: 'Financial Year Start', value: companyInfo.fyStart, icon: Calendar },
    { label: 'Company Type', value: companyInfo.companyType, icon: Briefcase },
    { label: 'VAT Rate', value: `${companyInfo.vatRate}%`, icon: Receipt },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Company Information</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm">{detail.label}</h3>
                  <p className="font-semibold">{detail.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}