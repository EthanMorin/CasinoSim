export function useAccount() {
  const playerBalance = useState('playerBalance', () => 1000);

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
  };
}
