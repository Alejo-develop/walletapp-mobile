export interface CategoryResponse {
  id: string;
  userID: string;
  budgetID: string;
  walletID: string;
  name: string;
  url_icon: string;
  budget_for_category: string;
}

export interface FormCategoryInterface {
  name: string;
  budget_for_category: number;
}

export interface CreateCategory {
  userID: string | null;
  budgetID: string | null | undefined;
  walletID: string | null | undefined;
  name: string;
  budget_for_category: number;
}
