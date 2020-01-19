import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import FabricDatePicker from './components/FabricDatePicker';
import { IFabricDatePickerProps, IFabricDatePickerWebpartProps } from './components/IFabricDatePickerProps';

export default class FabricPeoplePickerWebPart extends BaseClientSideWebPart<IFabricDatePickerWebpartProps> {

    public render(): void {
        const element: React.ReactElement<IFabricDatePickerProps> = React.createElement(
          FabricDatePicker,
            {
                spcontect: this.context
            }
        );
        ReactDom.render(element, this.domElement);
    }

}
