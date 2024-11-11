import db from './init';

export const getCustomers = () => {
  return db.prepare('SELECT * FROM customers').all();
};

export const getSuppliers = () => {
  return db.prepare('SELECT * FROM suppliers').all();
};

export const getProducts = () => {
  return db.prepare('SELECT * FROM products').all();
};

export const getEmployees = () => {
  return db.prepare('SELECT * FROM employees').all();
};

export const getBankAccounts = () => {
  return db.prepare('SELECT * FROM bank_accounts').all();
};

export const createSale = (customerId: number, items: any[], total: number) => {
  const insertSale = db.prepare('INSERT INTO sales (date, customer_id, total) VALUES (?, ?, ?)');
  const insertSaleItem = db.prepare('INSERT INTO sale_items (sale_id, product_id, quantity, price) VALUES (?, ?, ?, ?)');
  
  const transaction = db.transaction((customerId, items, total) => {
    const saleResult = insertSale.run(new Date().toISOString(), customerId, total);
    const saleId = saleResult.lastInsertRowid;
    
    for (const item of items) {
      insertSaleItem.run(saleId, item.productId, item.quantity, item.price);
    }
  });

  return transaction(customerId, items, total);
};

// Add more database operations as needed