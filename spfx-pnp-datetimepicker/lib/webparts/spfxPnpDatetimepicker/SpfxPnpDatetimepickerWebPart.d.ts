import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ISpfxPnpDatetimepickerWebPartProps {
    description: string;
}
export default class SpfxPnpDatetimepickerWebPart extends BaseClientSideWebPart<ISpfxPnpDatetimepickerWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SpfxPnpDatetimepickerWebPart.d.ts.map