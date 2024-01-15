export interface IUserStore {
  isAuthorized: string | null | void;
  email: string | null;
  userDetails: string | null;
  isAdmin: string | null | void;
}
