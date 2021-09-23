import { ILocationPickerItem } from "@pnp/spfx-controls-react/lib/LocationPicker";

export interface ISpfxPnpLocationpickerProps {
  description: string;
  context: any;
}

export interface ISpfxPnpLocationpickerState {
  selectedAddress: ILocationPickerItem;
}