import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IMegaMenuSpFxApplicationCustomizerProperties {
    testMessage: string;
    Top: string;
    Bottom: string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class MegaMenuSpFxApplicationCustomizer extends BaseApplicationCustomizer<IMegaMenuSpFxApplicationCustomizerProperties> {
    private _topPlaceholder;
    private _bottomPlaceholder;
    onInit(): Promise<void>;
    private _renderPlaceHolders();
    private _onDispose();
}
