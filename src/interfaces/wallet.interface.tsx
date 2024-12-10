export interface WalletResponse {
  id?: string;
  userID?: string | null;
  salary?: number | null;
  totalCash?: number | null;
  cardName?: string | null;
  cardNumber?: string | null;
  expirationDate?: string | null;
  cvv?: string | null;
  payDay?: string | null;
  extraCash?: number | null;
  expenditures?: number | null;
}

export interface WalletInterface{
  userID?: string | null;
  salary?: number | null;
  cardName?: string | null;
  cardNumber?: string | null;
  expirationDate?: string | null;
  cvv?: string | null;
  payDay?: string | null;
  extraCash?: number | null;
}
