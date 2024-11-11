import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CompanyInfo from './components/CompanyInfo';
import DataTable from './components/DataTable';
import { customers, suppliers, products, bankAccounts, employees } from './data';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const formatCurrency = (value: number | null) =>
    value ? `KES ${value.toLocaleString()}` : 'N/A';

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'company':
        return <CompanyInfo />;
      case 'customers':
        return (
          <DataTable
            title="Customers"
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'contacts', label: 'Contacts' },
              { key: 'telephone', label: 'Telephone' },
              {
                key: 'openingBalance',
                label: 'Opening Balance',
                format: formatCurrency,
              },
            ]}
            data={customers}
          />
        );
      case 'products':
        return (
          <DataTable
            title="Products"
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'category', label: 'Category' },
              { key: 'description', label: 'Description' },
              {
                key: 'buyingPrice',
                label: 'Buying Price',
                format: formatCurrency,
              },
              {
                key: 'sellingPrice',
                label: 'Selling Price',
                format: formatCurrency,
              },
              { key: 'inStock', label: 'In Stock' },
            ]}
            data={products}
          />
        );
      case 'suppliers':
        return (
          <DataTable
            title="Suppliers"
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'contacts', label: 'Contacts' },
              { key: 'telephone', label: 'Telephone' },
              {
                key: 'openingBalance',
                label: 'Opening Balance',
                format: formatCurrency,
              },
            ]}
            data={suppliers}
          />
        );
      case 'banking':
        return (
          <DataTable
            title="Bank Accounts"
            columns={[
              { key: 'name', label: 'Account Name' },
              {
                key: 'openingBalance',
                label: 'Opening Balance',
                format: formatCurrency,
              },
            ]}
            data={bankAccounts}
          />
        );
      case 'employees':
        return (
          <DataTable
            title="Employees"
            columns={[
              { key: 'name', label: 'Name' },
              {
                key: 'grossSalary',
                label: 'Gross Salary',
                format: formatCurrency,
              },
              {
                key: 'nhifDeduction',
                label: 'NHIF Deduction',
                format: formatCurrency,
              },
              { key: 'nssf', label: 'NSSF', format: formatCurrency },
            ]}
            data={employees}
          />
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;