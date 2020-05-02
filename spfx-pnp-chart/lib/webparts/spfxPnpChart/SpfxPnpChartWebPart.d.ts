import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ISpfxPnpChartWebPartProps {
    description: string;
}
export default class SpfxPnpChartWebPart extends BaseClientSideWebPart<ISpfxPnpChartWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SpfxPnpChartWebPart.d.ts.map