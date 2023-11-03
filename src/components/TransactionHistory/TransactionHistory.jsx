import css from './TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';

export default function TransactionHistory({ items }) {
    return (
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          <TransactionHistoryItem items={items} />
        </tbody>
      </table>
    );
}