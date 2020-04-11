export interface ISimpleListOperationsState {
  addText: string;
  updateText:IListItem[];
}

export interface IListItem {
  id: number;
  title: string;
}