export interface WalletResponse {
  id?: string;
  userID?: string;
  salary?: number;
  cardName?: string | null;
  cardNumber?: string | null;
  expirationDate?: string | null;
  cvv?: string | null;
  extraCash?: number | null;
  expenditures?: number | null;
}