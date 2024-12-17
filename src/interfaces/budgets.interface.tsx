export interface BudgetResponse {
  id: string;
  name: string;
  budget: number;
  userID: string;
  walletID: string;
}

export interface GetBudgetResponse {
  data: BudgetResponse[] | null;
}

