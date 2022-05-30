import { ITreeItem } from "@pnp/spfx-controls-react/lib/TreeView";

export interface ISpfxPnpTreeviewState {
  TreeLinks: ITreeItem[];
}

export interface ISpfxPnpTreeviewProps {
  description: string;
  context: any | null;
}
