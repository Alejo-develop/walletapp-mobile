export interface TransactionInterface {
  name?: string | null;
  store?: string | null;
  description?: string | null;
  cost?: number | null;
}

export interface FormTransactionComponentProps {
  handleFormChange: (field: keyof TransactionInterface, value: string) => void;
}
