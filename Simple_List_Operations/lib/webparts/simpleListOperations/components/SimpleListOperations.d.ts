import * as React from 'react';
import { ISimpleListOperationsProps } from './ISimpleListOperationsProps';
import { ISimpleListOperationsState, IListItem } from './ISimpleListOperationsState';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
export default class SimpleListOperations extends React.Component<ISimpleListOperationsProps, ISimpleListOperationsState> {
    constructor(prop: ISimpleListOperationsProps, state: ISimpleListOperationsState);
    render(): React.ReactElement<ISimpleListOperationsProps>;
    _getListItems(): Promise<void>;
    _updateClicked(row: IListItem): Promise<void>;
    _deleteClicked(row: IListItem): Promise<void>;
    _addClicked(): Promise<void>;
    private _clearClicked;
}
//# sourceMappingURL=SimpleListOperations.d.ts.map