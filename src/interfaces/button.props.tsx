export interface ButtonProps{
    text: string;
    onPress?: () => void;
}

export interface ButtonIconProps{
    name: string;
    text: string;
}

export interface ButtonCategoryProps{
    title: string;
    icon: string;
    cost: string
}