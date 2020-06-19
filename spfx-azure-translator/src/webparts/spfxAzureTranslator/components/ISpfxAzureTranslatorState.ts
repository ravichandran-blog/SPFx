import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

export interface ISpfxAzureTranslatorState {
  toLanguage: string;
  content: string;
  userinput: string;
  langarr: IDropdownOption[];
}
