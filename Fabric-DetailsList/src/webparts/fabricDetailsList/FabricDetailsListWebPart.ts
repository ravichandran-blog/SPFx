import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import FabricDetailsList from './components/FabricDetailsList';
import { IFabricDetailsListProps } from './components/IFabricDetailsListProps';

export interface IFabricDetailsListWebPartProps {
  description: string;
}

export default class FabricDetailsListWebPart extends BaseClientSideWebPart<IFabricDetailsListWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IFabricDetailsListProps > = React.createElement(
      FabricDetailsList,
      {
        spcontect: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
}
