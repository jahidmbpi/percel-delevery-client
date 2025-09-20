export type Role = "SENDER" | "ADMIN" | "RECEIVER";

export type IsActive = "ACTIVE" | "BLOCKED";

export type AuthProvider = {
  provider: "google" | "credential";
  providerID: string;
};

export interface IUserFrontend {
  _id: string;
  name: string;
  email: string;
  password?: string;
  phone?: string;
  picture?: string;
  role: Role;
  address?: string;
  isActive?: IsActive;
  isDeleted?: boolean;
  isVerified: boolean;
  auth?: AuthProvider[];
  percel?: string[];
}
