import { LoginType } from "./LoginType";

export type UserContextType = {
  setAuth: (value: boolean) => void;
  auth: boolean;
  loginUser: (dataLogin: LoginType) => Promise<void>;
};
