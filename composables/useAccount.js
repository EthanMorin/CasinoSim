export function useAccount() {
  const playerBalance = useState('playerBalance', () => 0);

  function getPlayerBalance() {
    return playerBalance.value;
  }

  function incrementBalance(amount) {
    playerBalance.value += amount;
  }

  function decrementBalance(amount) {
    playerBalance.value -= amount;
  }

  return getPlayerBalance, incrementBalance, decrementBalance;
}
