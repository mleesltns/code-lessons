import { readFile } from 'fs/promises';

const data = await readFile('./customers.json', 'utf-8');
const customers = JSON.parse(data);

const proCustomers = customers.filter((c) => c.seats > 10);

console.log('customers with more than 10 seats:');
console.log(proCustomers);