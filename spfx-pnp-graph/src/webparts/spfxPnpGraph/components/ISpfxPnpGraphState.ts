export interface ISpfxPnpGraphState {
  description: string;
  users:IUserItem[];
}

export interface IUserItem {
  displayName: string;
  url: string;
  userPrincipalName: string;
  profileImageSrc:string;
  jobTitle:string;
}
