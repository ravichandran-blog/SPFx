import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ISimpleListOperationsWebPartProps {
    description: string;
}
export default class SimpleListOperationsWebPart extends BaseClientSideWebPart<ISimpleListOperationsWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SimpleListOperationsWebPart.d.ts.map