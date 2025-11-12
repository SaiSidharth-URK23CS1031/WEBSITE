import React, { useState } from "react";

function BudgetCalculator() {
  // State variables for inputs
  const [income, setIncome] = useState("");
  const [rent, setRent] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [other, setOther] = useState("");
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const handleCalculate = () => {
    // Validation
    if (
      income === "" ||
      rent === "" ||
      food === "" ||
      transport === "" ||
      other === "" ||
      Number(income) <= 0 ||
      Number(rent) < 0 ||
      Number(food) < 0 ||
      Number(transport) < 0 ||
      Number(other) < 0
    ) {
      alert("Please enter positive values for all fields.");
      return;
    }

    // Calculation
    const bal =
      Number(income) -
      (Number(rent) + Number(food) + Number(transport) + Number(other));
    setBalance(bal);

    if (bal < 0) {
      setMessage("You are overspending!");
      setColor("red");
    } else {
      setMessage("Good job managing your expenses!");
      setColor("green");
    }
  };

  // For clearing fields (optional)
  const handleReset = () => {
    setIncome("");
    setRent("");
    setFood("");
    setTransport("");
    setOther("");
    setBalance(null);
    setMessage("");
    setColor("");
  };

  return (
    <div style={{
      maxWidth: "400px", margin: "40px auto", padding: "24px",
      borderRadius: "14px", background: "#f6f9fa", boxShadow: "0 6px 18px #bbb"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "28px" }}>Budget Calculator</h2>
      <div>
        <label>Monthly Income:</label>
        <input
          type="number"
          min="1"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Monthly Income"
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </div>
      <div>
        <label>Rent/EMI:</label>
        <input
          type="number"
          min="0"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          placeholder="Rent/EMI"
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </div>
      <div>
        <label>Food Expenses:</label>
        <input
          type="number"
          min="0"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="Food Expenses"
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </div>
      <div>
        <label>Transport Expenses:</label>
        <input
          type="number"
          min="0"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
          placeholder="Transport Expenses"
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </div>
      <div>
        <label>Other Expenses:</label>
        <input
          type="number"
          min="0"
          value={other}
          onChange={(e) => setOther(e.target.value)}
          placeholder="Other Expenses"
          style={{ width: "100%", marginBottom: "12px" }}
        />
      </div>
      <button
        onClick={handleCalculate}
        style={{
          width: "100%", padding: "10px", background: "#3069ed",
          color: "#fff", fontWeight: "bold", fontSize: "16px", border: "none", borderRadius: "7px", marginBottom: "10px", cursor: "pointer"
        }}
      >
        Calculate Balance
      </button>
      <button
        onClick={handleReset}
        style={{
          width: "100%", padding: "10px", background: "#e4eaf9",
          color: "#222", fontWeight: "bold", fontSize: "16px", border: "none", borderRadius: "7px", marginBottom: "10px", cursor: "pointer"
        }}
      >
        Reset
      </button>
      {balance !== null && (
        <div style={{ marginTop: "18px", textAlign: "center" }}>
          <span style={{ fontSize: "20px", color: color }}>
            Remaining Balance: ₹{balance}
          </span>
          <div style={{ color: color, fontWeight: "bold", marginTop: "6px" }}>
            {message}
          </div>
        </div>
      )}
    </div>
  );
}

export default BudgetCalculator;
