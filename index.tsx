import { useState } from "react";

export default function Home() {
  const [investment, setInvestment] = useState(0);
  const estimatedRentability = investment * 0.08;
  const managementFee = investment * 0.015;
  const netGain = estimatedRentability - managementFee;

  return (
    <div style={{ padding: 20 }}>
      <h1>UrbaNova Capital</h1>
      <p>Calculadora de rentabilidad anual:</p>
      <input
        type="number"
        value={investment}
        onChange={(e) => setInvestment(Number(e.target.value))}
        placeholder="Tu inversión (€)"
      />
      <p>Rentabilidad estimada: €{estimatedRentability.toFixed(2)}</p>
      <p>Comisión de gestión: €{managementFee.toFixed(2)}</p>
      <p>Ganancia neta anual: €{netGain.toFixed(2)}</p>
    </div>
  );
}