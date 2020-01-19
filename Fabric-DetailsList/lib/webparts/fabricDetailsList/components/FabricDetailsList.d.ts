import * as React from "react";
import { IColumn } from "office-ui-fabric-react/lib/DetailsList";
import { IFabricDetailsListProps } from "./IFabricDetailsListProps";
export interface IDetailsListDocumentsExampleState {
    columns: IColumn[];
    items: IDocument[];
    selectionDetails: string;
}
export interface IDocument {
    name: string;
    value: string;
    iconName: string;
    fileType: string;
    modifiedBy: string;
    dateModified: string;
    dateModifiedValue: number;
    fileSize: string;
    fileSizeRaw: number;
}
export default class FabricDetailsList extends React.Component<IFabricDetailsListProps, IDetailsListDocumentsExampleState> {
    private _selection;
    private _allItems;
    constructor(props: IFabricDetailsListProps, state: IDetailsListDocumentsExampleState);
    render(): JSX.Element;
    private _onChangeText;
    private _onItemInvoked;
    private _getSelectionDetails;
    private _onColumnClick;
}
//# sourceMappingURL=FabricDetailsList.d.ts.map