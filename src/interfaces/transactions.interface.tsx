export interface TransactionFormInterface {
  name?: string | null;
  store?: string | null;
  description?: string | null;
  cost?: number | null;
}

export interface CreateTransactionInterface {
  userID?: string | null;
  budgetID?: string | null;
  categoryID?: string | null;
  walletID?: string | null;
  name?: string | null;
  store?: string | null;
  description?: string | null;
  cost?: number | null;
}

export interface TransactionResponseInterface {
  id: string;
  userID?: string | null;
  budgetID?: string | null;
  walletID?: string | null;
  categoryID?: string | null;
  name?: string | null;
  store?: string | null;
  description?: string | null;
  cost?: number | null;
  date: string;
  category?: {name: string} | null;
  budget?: {name: string} | null;
}

export interface FormTransactionComponentProps {
  handleFormChange: (field: keyof TransactionFormInterface, value: string) => void;
}
