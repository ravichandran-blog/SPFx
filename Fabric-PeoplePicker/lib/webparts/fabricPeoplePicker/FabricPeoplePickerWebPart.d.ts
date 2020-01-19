import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { IFabricPeoplePickerProps } from './components/IFabricPeoplePickerProps';
export default class FabricPeoplePickerWebPart extends BaseClientSideWebPart<IFabricPeoplePickerProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=FabricPeoplePickerWebPart.d.ts.map