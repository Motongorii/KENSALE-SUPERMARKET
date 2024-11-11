import Database from 'better-sqlite3';

const db = new Database('kensale.db');

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    contacts TEXT NOT NULL,
    telephone TEXT NOT NULL,
    opening_balance REAL
  );

  CREATE TABLE IF NOT EXISTS suppliers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    contacts TEXT NOT NULL,
    telephone TEXT NOT NULL,
    opening_balance REAL
  );

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    buying_price REAL,
    selling_price REAL,
    in_stock INTEGER,
    category TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS bank_accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    opening_balance REAL NOT NULL
  );

  CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    gross_salary REAL NOT NULL,
    nhif_deduction REAL NOT NULL,
    nssf_deduction REAL NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sales (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    customer_id INTEGER NOT NULL,
    total REAL NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers (id)
  );

  CREATE TABLE IF NOT EXISTS sale_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sale_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    price REAL NOT NULL,
    FOREIGN KEY (sale_id) REFERENCES sales (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
  );

  CREATE TABLE IF NOT EXISTS purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    supplier_id INTEGER NOT NULL,
    total REAL NOT NULL,
    FOREIGN KEY (supplier_id) REFERENCES suppliers (id)
  );

  CREATE TABLE IF NOT EXISTS purchase_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    purchase_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    price REAL NOT NULL,
    FOREIGN KEY (purchase_id) REFERENCES purchases (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
  );
`);

// Insert initial data
const insertInitialData = db.transaction(() => {
  // Insert default admin user
  const insertUser = db.prepare('INSERT OR IGNORE INTO users (username, password, role) VALUES (?, ?, ?)');
  insertUser.run('admin', '$2a$10$YourHashedPasswordHere', 'admin');

  // Insert initial customers
  const insertCustomer = db.prepare('INSERT OR IGNORE INTO customers (name, contacts, telephone, opening_balance) VALUES (?, ?, ?, ?)');
  insertCustomer.run('River road primary school', 'p.o.box 1234 nairobi', '988795795', 50000);
  insertCustomer.run('Windsor hotel', 'p.o.box 56454 kisumu', '657675547', 40000);
  insertCustomer.run('Mama mboga kiosk', 'p.o.box 6667 meru', '4636757', null);
  insertCustomer.run('Mali ngumu resellers', 'p.o.box 1766 nairobi', '75747343', 12000);
  insertCustomer.run('Kca university', 'p.o.box 44634 Nairobi', '224554', null);

  // Insert initial suppliers
  const insertSupplier = db.prepare('INSERT OR IGNORE INTO suppliers (name, contacts, telephone, opening_balance) VALUES (?, ?, ?, ?)');
  insertSupplier.run('BIDCO OIL REFINERIES', 'p.o.box 8729 nairobi', '9875775', 70000);
  insertSupplier.run('LONG HORN STATIONARIES', 'p.o.box 1290 kisumu', '12675547', 10000);
  insertSupplier.run('HACO INDUSTRIES', 'p.o.box 9472 meru', '83216757', 80000);
  insertSupplier.run('BROOKSIDE DAIRIES', 'p.o.box 53353 nairobi', '12367343', null);
  insertSupplier.run('LG ELECTRONICS', 'p.o.box 56563 nairobi', '9869955', 10000);

  // Insert initial products
  const insertProduct = db.prepare('INSERT OR IGNORE INTO products (name, description, buying_price, selling_price, in_stock, category) VALUES (?, ?, ?, ?, ?, ?)');
  insertProduct.run('progress 200 page books', 'stationary', 28, 33, 7000, 'stationary');
  insertProduct.run('Mathematical set', 'stationary', 120, 129, 1000, 'stationary');
  insertProduct.run('Receipt books', 'stationary', 100, 110, 1000, 'stationary');
  insertProduct.run('White board markers', 'stationary', 20, 25, 1000, 'stationary');
  insertProduct.run('youghat', 'foods', 45, 50, 8000, 'foods');
  insertProduct.run('Kasuku cooking fat 2kg', 'foods', 130, 150, 1000, 'foods');
  insertProduct.run('biscuits', 'Foods', 30, 35, 500, 'foods');
  insertProduct.run('microwave', 'electronic', 2000, 2500, 50, 'electronic');
  insertProduct.run('Lg radio', 'electronic', 4500, 5000, 100, 'electronic');
  insertProduct.run('refrigerator', 'Electronic', 30000, 34000, 400, 'electronic');

  // Insert initial bank accounts
  const insertBankAccount = db.prepare('INSERT OR IGNORE INTO bank_accounts (name, opening_balance) VALUES (?, ?)');
  insertBankAccount.run('Baclays bank savings account', 90000);
  insertBankAccount.run('Equity fixed account', 100000);
  insertBankAccount.run('Kcb current', 800000);

  // Insert initial employees
  const insertEmployee = db.prepare('INSERT OR IGNORE INTO employees (name, gross_salary, nhif_deduction, nssf_deduction) VALUES (?, ?, ?, ?)');
  insertEmployee.run('Peter kimani', 90000, 300, 500);
  insertEmployee.run('Alex njagi', 100000, 300, 600);
  insertEmployee.run('Mary nduku', 80000, 300, 300);
});

// Execute initial data insertion
insertInitialData();

export default db;