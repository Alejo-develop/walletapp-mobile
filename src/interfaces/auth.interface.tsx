export interface FormAuthComponentProps {
    handleFormChange: (field: keyof AuthInterface, value: string) => void;
}

export interface LoginResponse {
  id: string;
  token: string;
}

export interface AuthInterface {
  email: string;
  password: string;
  repeatPassword?: string;
}
