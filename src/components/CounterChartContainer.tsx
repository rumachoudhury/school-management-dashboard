

import CountChart from "./CountChart";

export default async function CounterChartContainer() {
  // Temporary data for testing.
  // Later, we can replace these with the actual database values.
  const boys = 40;
  const girls = 50;

  return (
    <div className="w-full h-full">
      <CountChart boys={boys} girls={girls} />
    </div>
  );
}

