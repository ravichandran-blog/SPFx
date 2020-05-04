import * as React from 'react';
import { ISpfxPnpFilepickerProps } from './ISpfxPnpFilepickerProps';
import { ISpfxPnpFilepickerState } from './ISpfxPnpFilepickerState';
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";
export default class SpfxPnpFilepicker extends React.Component<ISpfxPnpFilepickerProps, ISpfxPnpFilepickerState> {
    constructor(props: ISpfxPnpFilepickerProps, state: ISpfxPnpFilepickerState);
    render(): React.ReactElement<ISpfxPnpFilepickerProps>;
    private saveIntoSharePoint;
}
//# sourceMappingURL=SpfxPnpFilepicker.d.ts.map