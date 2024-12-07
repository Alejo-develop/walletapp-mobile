import { UserResponseInterface } from "./user.interface";

export interface FormAuthComponentProps {
    handleFormChange: (field: keyof AuthInterface, value: string) => void;
}

export interface LoginResponse {
  id: string;
  name: string;
  token: string;
}

export interface AuthInterface {
  email: string;
  password: string;
  repeatPassword?: string;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthContextProps {
  isAuth: boolean;
  signOut: () => Promise<void>;
  saveSessionInfo: (id: string, token: string, name: string) => Promise<void>;
  getInfoUser: () => Promise<UserResponseInterface | null | undefined | any>
  userInfo: UserResponseInterface | null,
  name: string | null,
  idUser: string | null,
  getToken: () => Promise<string | null>
  getId: () => string | null
}