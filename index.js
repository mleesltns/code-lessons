import { readFile, writeFile } from 'fs/promises';

const data = await readFile('./customers.json', 'utf-8');
const customers = JSON.parse(data);

const enrichedCustomers = customers.map((c) => {
  const isHighRisk = c.plan === 'free' && c.seats === 1;
  return {
    ...c,
    renewalRisk: isHighRisk ? 'high' : 'low',
  };
});

await writeFile(
  './customers-enriched.json',
  JSON.stringify(enrichedCustomers, null, 2)
);

console.log('Done! Check customers-enriched.json');