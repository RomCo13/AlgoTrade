import { useEffect, useState } from 'react';
import { addRule, fetchRules } from './api';

interface Rule {
  symbol: string;
  operator: '>' | '<';
  value: number;
}

function App() {
  const [rules, setRules] = useState<Rule[]>([]);
  const [symbol, setSymbol] = useState('BTC');
  const [operator, setOperator] = useState<'>' | '<'>('>');
  const [value, setValue] = useState(70000);

  const load = async () => {
    const data = await fetchRules();
    setRules(data);
  };

  useEffect(() => {
    load();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addRule({ symbol, operator, value });
    load();
  };

  return (
    <div>
      <h1>AlgoTrade Rules</h1>
      <form onSubmit={submit}>
        <input value={symbol} onChange={e => setSymbol(e.target.value)} />
        <select value={operator} onChange={e => setOperator(e.target.value as '>' | '<') }>
          <option value="&gt;">&gt;</option>
          <option value="&lt;">&lt;</option>
        </select>
        <input type="number" value={value} onChange={e => setValue(Number(e.target.value))} />
        <button type="submit">Add Rule</button>
      </form>
      <ul>
        {rules.map((r, i) => (
          <li key={i}>{`${r.symbol} ${r.operator} ${r.value}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
