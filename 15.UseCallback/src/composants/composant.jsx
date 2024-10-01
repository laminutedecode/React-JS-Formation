function CounterButton({ onClick, label }) {
  console.log(`Rendu du bouton ${label}`);

  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

export default CounterButton;
