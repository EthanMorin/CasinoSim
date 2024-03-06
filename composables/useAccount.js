export function useAccount() {
  const playerBalance = useState('playerBalance', () => 1000);
  const loans = useState('loans', () => -10000);

  function incrementBalance(amount) {
    playerBalance.value += amount;
  }

  function decrementBalance(amount) {
    playerBalance.value -= amount;
  }

  return {
    playerBalance,
    incrementBalance,
    decrementBalance,
    loans,
  };
}
