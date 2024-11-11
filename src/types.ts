export interface Customer {
  name: string;
  contacts: string;
  telephone: string;
  openingBalance: number | null;
}

export interface Supplier {
  name: string;
  contacts: string;
  telephone: string;
  openingBalance: number | null;
}

export interface Product {
  name: string;
  category: string;
  description: string;
  buyingPrice: number | null;
  sellingPrice: number | null;
  inStock: number | null;
}

export interface BankAccount {
  name: string;
  openingBalance: number;
}

export interface Employee {
  name: string;
  grossSalary: number;
  nhifDeduction: number;
  nssf: number;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  address: string;
  fyStart: string;
  companyType: string;
  vatRate: number;
}