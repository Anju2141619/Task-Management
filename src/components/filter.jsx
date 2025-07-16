function Filter({ current, onChange }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          style={{
            marginRight: "10px",
            padding: "8px 16px",
            background: current === f ? "black" : "#ddd",
            color: current === f ? "white" : "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default Filter;
