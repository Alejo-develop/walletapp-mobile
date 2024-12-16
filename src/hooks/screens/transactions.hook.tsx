import {useState} from 'react';
import {TransactionResponseInterface} from '../../interfaces/transactions.interface';
import {useAuth} from '../../contexts/auth.context';
import {ErrorResponse} from '../../interfaces/error.interface';
import {findAllTransactionsServices} from '../../services/transaction.services';
import {format} from 'date-fns';

const TransactionsHook = () => {
  const [transactions, setTransactions] = useState<
    TransactionResponseInterface[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const auth = useAuth();

  const fetchTransactions = async () => {
    setLoading(true);
    const token = await auth.getToken();
    const userID = auth.getId();

    try {
      const transactions_ = await findAllTransactionsServices(userID, token);

      if (transactions_.data.length <= 0) {
        setError(
          "Transactions not aviable because you've dont a buy anything yet",
        );
      }
      setTransactions(transactions_.data);
    } catch (err: any) {
      const apiError = err.response?.data as ErrorResponse;
      if (apiError?.message) {
        setError(apiError.message);
        setLoading(false);
      } else {
        setLoading(false);
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  const transactionsByDay = transactions.reduce(
    (
      acc: {[key: string]: TransactionResponseInterface[]},
      transaction: TransactionResponseInterface,
    ) => {
      const transactionDate = new Date(transaction.date);
      const dayOfWeek = transactionDate.toLocaleDateString('en-US', {
        weekday: 'long',
      });

      if (!acc[dayOfWeek]) {
        acc[dayOfWeek] = [];
      }
      acc[dayOfWeek].push(transaction);
      return acc;
    },
    {},
  );

  Object.keys(transactionsByDay).forEach(day => {
    transactionsByDay[day].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  });
  
  const sections = Object.keys(transactionsByDay).map(day => ({
    title: day,
    data: transactionsByDay[day],
  }));

  return {transactions, loading, error, sections, fetchTransactions};
};

export default TransactionsHook;
