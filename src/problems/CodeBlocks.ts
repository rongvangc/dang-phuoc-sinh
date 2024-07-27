export const ProblemCode1Method1 = `
const sum_to_n_a = function(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
      sum += i;
  }
  return sum;
};
`;

export const ProblemCode1Method2 = `
const sum_to_n_b = function(n) {
  return n * (n + 1) / 2;
};
`;

export const ProblemCode1Method3 = `
const sum_to_n_c = function(n) {
  if (n === 1) return 1; // Base case
  return n + sum_to_n_c(n - 1); // Recursive case
};
`;

export const ProblemCode3 = `
interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string; // Assuming this property exists based on its use in getPriority
}
interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
}
// Assuming BoxProps and useWalletBalances, usePrices, WalletRow, and classes are defined elsewhere

const WalletPage: React.FC<Props> = ({ children, ...rest }) => {
  const balances = useWalletBalances();

  const getPriority = (blockchain: string): number => { // Ensure string is the correct type
    switch (blockchain) {
      case 'Osmosis': return 100;
      case 'Ethereum': return 50;
      case 'Arbitrum': return 30;
      case 'Zilliqa':
      case 'Neo': return 20;
      default: return -99;
    }
  };

  const sortedAndFilteredBalances = useMemo(() => {
    const filtered = balances.filter(balance => balance.amount > 0);
    return filtered.sort((lhs, rhs) => getPriority(rhs.blockchain) - getPriority(lhs.blockchain));
  }, [balances]);

  const rows = sortedAndFilteredBalances.map((balance, index) => {
    const usdValue = prices[balance.currency] * balance.amount;
    const formattedAmount = balance.amount.toFixed();
    const key = balance.currency + index;

    return (
      <WalletRow 
        className={classes.row}
        key={key}
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={formattedAmount}
      />
    );
  });

  return <div {...rest}>{rows}</div>;
};
`;
