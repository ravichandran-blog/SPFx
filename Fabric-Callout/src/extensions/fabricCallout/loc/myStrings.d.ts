declare interface IFabricCalloutCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'FabricCalloutCommandSetStrings' {
  const strings: IFabricCalloutCommandSetStrings;
  export = strings;
}
