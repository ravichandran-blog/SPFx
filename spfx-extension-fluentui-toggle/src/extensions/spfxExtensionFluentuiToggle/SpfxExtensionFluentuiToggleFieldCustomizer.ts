import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';

import * as strings from 'SpfxExtensionFluentuiToggleFieldCustomizerStrings';
import SpfxExtensionFluentuiToggle, { ISpfxExtensionFluentuiToggleProps } from './components/SpfxExtensionFluentuiToggle';

/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpfxExtensionFluentuiToggleFieldCustomizerProperties {
  // This is an example; replace with your own property
  sampleText?: string;
}

const LOG_SOURCE: string = 'SpfxExtensionFluentuiToggleFieldCustomizer';

export default class SpfxExtensionFluentuiToggleFieldCustomizer
  extends BaseFieldCustomizer<ISpfxExtensionFluentuiToggleFieldCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    // Add your custom initialization to this method.  The framework will wait
    // for the returned promise to resolve before firing any BaseFieldCustomizer events.
    Log.info(LOG_SOURCE, 'Activated SpfxExtensionFluentuiToggleFieldCustomizer with properties:');
    Log.info(LOG_SOURCE, JSON.stringify(this.properties, undefined, 2));
    Log.info(LOG_SOURCE, `The following string should be equal: "SpfxExtensionFluentuiToggleFieldCustomizer" and "${strings.Title}"`);
    return Promise.resolve();
  }

  @override
  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    // Use this method to perform your custom cell rendering.
    const text: string = event.fieldValue;
    const listitemid: string = event.listItem.getValueByName("ID");
    const listname: string = this.context.pageContext.list.title;
    const context:any=this.context;

    const spfxExtensionFluentuiToggle: React.ReactElement<{}> =
      React.createElement(SpfxExtensionFluentuiToggle, { text, listitemid, listname,context } as ISpfxExtensionFluentuiToggleProps);

    ReactDOM.render(spfxExtensionFluentuiToggle, event.domElement);
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
