export interface ISpfxReactSelectState {
  options: Ioption[];
  selectedvalue:Ioption;
  selectedvalues:Ioption[];
}

export interface Ioption
{
  value:string;
  label:string;
}
