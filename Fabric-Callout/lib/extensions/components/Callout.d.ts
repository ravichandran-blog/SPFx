import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
export default class CalloutComponent extends BaseDialog {
    itemTitle: string;
    itemID: number;
    spcontext?: any | null;
    render(): void;
    getConfig(): IDialogConfiguration;
    private onDismiss;
}
//# sourceMappingURL=Callout.d.ts.map