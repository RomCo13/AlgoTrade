interface RulePayload {
  symbol: string;
  operator: '>' | '<';
  value: number;
}

export async function fetchRules() {
  const res = await fetch('http://localhost:3001/rules');
  return res.json();
}

export async function addRule(rule: RulePayload) {
  await fetch('http://localhost:3001/rules', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rule),
  });
}
