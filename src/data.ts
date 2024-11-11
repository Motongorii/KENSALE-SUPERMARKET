import { Customer, Supplier, Product, BankAccount, Employee, CompanyInfo } from './types';

export const companyInfo: CompanyInfo = {
  name: "KENSALE SUPERMARKET",
  legalName: "KENSALE STORES",
  address: "P.O.BOX 4874-00200 NAIROBI",
  fyStart: "Dec",
  companyType: "retail general",
  vatRate: 18
};

export const customers: Customer[] = [
  {
    name: "River road primary school",
    contacts: "p.o.box 1234 nairobi",
    telephone: "988795795",
    openingBalance: 50000
  },
  {
    name: "Windsor hotel",
    contacts: "p.o.box 56454 kisumu",
    telephone: "657675547",
    openingBalance: 40000
  },
  {
    name: "Mama mboga kiosk",
    contacts: "p.o.box 6667 meru",
    telephone: "4636757",
    openingBalance: null
  },
  {
    name: "Mali ngumu resellers",
    contacts: "p.o.box 1766 nairobi",
    telephone: "75747343",
    openingBalance: 12000
  },
  {
    name: "Kca university",
    contacts: "p.o.box 44634 Nairobi",
    telephone: "224554",
    openingBalance: null
  }
];

export const suppliers: Supplier[] = [
  {
    name: "BIDCO OIL REFINERIES",
    contacts: "p.o.box 8729 nairobi",
    telephone: "9875775",
    openingBalance: 70000
  },
  {
    name: "LONG HORN STATIONARIES",
    contacts: "p.o.box 1290 kisumu",
    telephone: "12675547",
    openingBalance: 10000
  },
  {
    name: "HACO INDUSTRIES",
    contacts: "p.o.box 9472 meru",
    telephone: "83216757",
    openingBalance: 80000
  },
  {
    name: "BROOKSIDE DAIRIES",
    contacts: "p.o.box 53353 nairobi",
    telephone: "12367343",
    openingBalance: null
  },
  {
    name: "LG ELECTRONICS",
    contacts: "p.o.box 56563 nairobi",
    telephone: "9869955",
    openingBalance: 10000
  }
];

export const products: Product[] = [
  {
    name: "progress 200 page books",
    category: "Stationery",
    description: "stationary",
    buyingPrice: 28,
    sellingPrice: 33,
    inStock: 7000
  },
  {
    name: "Mathematical set",
    category: "Stationery",
    description: "stationary",
    buyingPrice: 120,
    sellingPrice: 129,
    inStock: 1000
  },
  {
    name: "Receipt books",
    category: "Stationery",
    description: "stationary",
    buyingPrice: 100,
    sellingPrice: 110,
    inStock: 1000
  },
  {
    name: "White board markers",
    category: "Stationery",
    description: "stationary",
    buyingPrice: 20,
    sellingPrice: 25,
    inStock: 1000
  },
  {
    name: "youghat",
    category: "Foods",
    description: "foods",
    buyingPrice: 45,
    sellingPrice: 50,
    inStock: 8000
  },
  {
    name: "Kasuku cooking fat 2kg",
    category: "Foods",
    description: "foods",
    buyingPrice: 130,
    sellingPrice: 150,
    inStock: 1000
  },
  {
    name: "biscuits",
    category: "Foods",
    description: "Foods",
    buyingPrice: 30,
    sellingPrice: 35,
    inStock: 500
  },
  {
    name: "microwave",
    category: "Electronics",
    description: "electronic",
    buyingPrice: 2000,
    sellingPrice: 2500,
    inStock: 50
  },
  {
    name: "Lg radio",
    category: "Electronics",
    description: "electronic",
    buyingPrice: 4500,
    sellingPrice: 5000,
    inStock: 100
  },
  {
    name: "refrigerator",
    category: "Electronics",
    description: "Electronic",
    buyingPrice: 30000,
    sellingPrice: 34000,
    inStock: 400
  },
  {
    name: "printing",
    category: "Services",
    description: "Per page",
    buyingPrice: null,
    sellingPrice: 8,
    inStock: null
  },
  {
    name: "binding",
    category: "Services",
    description: "Per book",
    buyingPrice: null,
    sellingPrice: 60,
    inStock: null
  },
  {
    name: "photocopy",
    category: "Services",
    description: "Per page",
    buyingPrice: null,
    sellingPrice: 2,
    inStock: null
  },
  {
    name: "Cash discount",
    category: "Discounts",
    description: "For paying in cash",
    buyingPrice: null,
    sellingPrice: null,
    inStock: null
  }
];

export const bankAccounts: BankAccount[] = [
  {
    name: "Baclays bank savings account",
    openingBalance: 90000
  },
  {
    name: "Equity fixed account",
    openingBalance: 100000
  },
  {
    name: "Kcb current",
    openingBalance: 800000
  }
];

export const employees: Employee[] = [
  {
    name: "Peter kimani",
    grossSalary: 90000,
    nhifDeduction: 300,
    nssf: 500
  },
  {
    name: "Alex njagi",
    grossSalary: 100000,
    nhifDeduction: 300,
    nssf: 600
  },
  {
    name: "Mary nduku",
    grossSalary: 80000,
    nhifDeduction: 300,
    nssf: 300
  }
];