export interface ISpfxPnpPeoplepickerState {
  SuccessMessage: string;
  UserDetails: IUserDetail[];
  selectedusers: string[];
}

export interface IUserDetail {
  ID: number;
  LoginName: string;
}
