import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IFabricDetailsListWebPartProps {
    description: string;
}
export default class FabricDetailsListWebPart extends BaseClientSideWebPart<IFabricDetailsListWebPartProps> {
    render(): void;
    protected onDispose(): void;
}
//# sourceMappingURL=FabricDetailsListWebPart.d.ts.map