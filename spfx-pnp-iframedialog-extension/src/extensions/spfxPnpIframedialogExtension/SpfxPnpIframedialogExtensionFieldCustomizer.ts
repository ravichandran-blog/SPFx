import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';

import * as strings from 'SpfxPnpIframedialogExtensionFieldCustomizerStrings';
import SpfxPnpIframedialogExtension, { ISpfxPnpIframedialogExtensionProps } from './components/SpfxPnpIframedialogExtension';

/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpfxPnpIframedialogExtensionFieldCustomizerProperties {
  // This is an example; replace with your own property
  sampleText?: string;
}

const LOG_SOURCE: string = 'SpfxPnpIframedialogExtensionFieldCustomizer';

export default class SpfxPnpIframedialogExtensionFieldCustomizer
  extends BaseFieldCustomizer<ISpfxPnpIframedialogExtensionFieldCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    // Add your custom initialization to this method.  The framework will wait
    // for the returned promise to resolve before firing any BaseFieldCustomizer events.
    Log.info(LOG_SOURCE, 'Activated SpfxPnpIframedialogExtensionFieldCustomizer with properties:');
    Log.info(LOG_SOURCE, JSON.stringify(this.properties, undefined, 2));
    Log.info(LOG_SOURCE, `The following string should be equal: "SpfxPnpIframedialogExtensionFieldCustomizer" and "${strings.Title}"`);
    return Promise.resolve();
  }

  @override
  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    // Use this method to perform your custom cell rendering.
    const dURL = this.context.pageContext.site.absoluteUrl.replace(this.context.pageContext.site.serverRelativeUrl, '') + event.listItem.getValueByName("FileRef") + '?web=1';
    const dName = event.listItem.getValueByName("FileLeafRef");

    const spfxPnpIframedialogExtension: React.ReactElement<{}> =
      React.createElement(SpfxPnpIframedialogExtension, { FileName: dName, FileURL: dURL } as ISpfxPnpIframedialogExtensionProps);

    ReactDOM.render(spfxPnpIframedialogExtension, event.domElement);
  }

  @override
  public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
    // This method should be used to free any resources that were allocated during rendering.
    // For example, if your onRenderCell() called ReactDOM.render(), then you should
    // call ReactDOM.unmountComponentAtNode() here.
    ReactDOM.unmountComponentAtNode(event.domElement);
    super.onDisposeCell(event);
  }
}
