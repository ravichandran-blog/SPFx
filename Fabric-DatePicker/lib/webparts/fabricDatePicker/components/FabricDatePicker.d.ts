/// <reference types="react" />
import * as React from 'react';
import { IFabricDatePickerProps, IFabricDatePickerWebpartProps } from './IFabricDatePickerProps';
export default class FabricDatePicker extends React.Component<IFabricDatePickerProps, IFabricDatePickerWebpartProps> {
    private etag;
    constructor(props: IFabricDatePickerProps, state: IFabricDatePickerWebpartProps);
    render(): React.ReactElement<IFabricDatePickerProps>;
    private _onSelectDate;
    private _onFormatDate;
    private _alertClicked();
}
