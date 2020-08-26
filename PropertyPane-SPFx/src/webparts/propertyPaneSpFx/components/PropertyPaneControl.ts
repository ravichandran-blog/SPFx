import * as React from 'react';
import * as ReactDom from 'react-dom';
import {  
  IPropertyPaneCustomFieldProps,  
  IPropertyPaneField,  
  PropertyPaneFieldType  
} from '@microsoft/sp-webpart-base';  
import customtext from './CustomPeoplePicker';

export interface IPropertyFieldMessageBarPropsInternal extends IPropertyPaneCustomFieldProps {  
  onPropertyChange(items:any[]): void;    
  onRender(elem: HTMLElement): void;
  onDispose(elem: HTMLElement): void;
  key: string;  
  spcontect?:any|null;
}  


export default class propertypanecontrol implements IPropertyPaneField<IPropertyFieldMessageBarPropsInternal> {
  public properties: IPropertyFieldMessageBarPropsInternal;  
  public targetProperty: string;  
  public type: PropertyPaneFieldType = PropertyPaneFieldType.Custom;  
 // private onPropertyChange: (propertyPath: string, oldValue: any, newValue: any) => void;  
  private key: string;  
  private elem: HTMLElement;

  constructor(targetProperty: string,  userproperties: IPropertyFieldMessageBarPropsInternal) {
    this.targetProperty = targetProperty;
    this.render = this.render.bind(this);  
    this.properties = userproperties;  
    this.properties.onDispose = this.dispose;  
    this.properties.onRender = this.render;  
    this.properties.spcontect=userproperties.spcontect;
  //  this.onPropertyChange = userproperties.onPropertyChange;  
    this.key = userproperties.key;  
  }

  public render(elem: HTMLElement): void {
    if (!this.elem) {
      this.elem = elem;
    }
    const element: React.ReactElement<IPropertyFieldMessageBarPropsInternal> = React.createElement(customtext, {  
      onDispose: null,  
      onRender: null,  
      onPropertyChange: this.onChanged.bind(this),
      key: this.key,
      spcontect: this.properties.spcontect 
    });
    ReactDom.render(element, elem);
  }

  private onChanged(selectedusers: any): void {
    this.properties.onPropertyChange(selectedusers);
  }

  private dispose(elem: HTMLElement): void {  
  }
}

export function PropertyPanetextboxcustom(selectedusers:any, onChanged,spcontect?:any|null): IPropertyPaneField<IPropertyPaneCustomFieldProps> { 
  var newProperties: IPropertyFieldMessageBarPropsInternal = {  
    onPropertyChange: onChanged,  
    onDispose: null,  
    onRender: null,  
    key: 'test',
    spcontect:spcontect
  };  
  return new propertypanecontrol(selectedusers,newProperties);  
} 
