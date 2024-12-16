export interface ButtonProps {
  text: string;
  onPress?: () => void;
}

export interface ButtonIconProps {
  name?: string;
  text: string;
  onPress?: () => void;
}

export interface ButtonCategoryProps {
  title: string;
  icon: string;
  cost: string;
  onPress?: () => void;
}

export interface ButtonInfoBudgetProps {
  onPress?: () => void;
}
