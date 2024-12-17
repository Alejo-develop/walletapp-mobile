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

export interface FormBudget{
  name: string;
  budget: number;
}

export interface CreateBudgetInterface{
  name: string;
  budget: number;
  userID: string | null;
  walletID: string | null | undefined
}

