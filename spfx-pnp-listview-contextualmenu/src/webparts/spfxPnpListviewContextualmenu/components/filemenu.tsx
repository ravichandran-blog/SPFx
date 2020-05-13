import * as React from 'react';
import { IconButton } from 'office-ui-fabric-react';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

export interface IfilemenuProps {
    item: any;
    context: any;
    ondatachange: any;
}


export class filemenu extends React.Component<IfilemenuProps, {}> {

    public constructor(props: IfilemenuProps) {
        super(props);
        sp.setup({
            spfxContext: this.props.context
        });
        this.state = {
            panelOpen: false
        };
    }

    public render() {
        return (
            <div>
                <IconButton id='ContextualMenuButton1'
                    text=''
                    width='30'
                    split={false}
                    iconProps={{ iconName: 'MoreVertical' }}
                    menuIconProps={{ iconName: '' }}
                    menuProps={{
                        shouldFocusOnMount: true,
                        items: [
                            {
                                key: 'action1',
                                name: 'Open in new tab',
                                onClick: this.handleClick.bind(this, "open", this.props.item)
                            },
                            {
                                key: 'divider_1',
                                itemType: ContextualMenuItemType.Divider
                            },
                            {
                                key: 'action2',
                                name: 'Download',
                                onClick: this.handleClick.bind(this, "download", this.props.item)
                            },
                            {
                                key: 'action3',
                                name: 'Delete',
                                onClick: this.handleClick.bind(this, "delete", this.props.item)
                            },
                            {
                                key: 'disabled',
                                name: 'Disabled action',
                                disabled: true,
                                onClick: () => console.error('Disabled action should not be clickable.')
                            }
                        ]
                    }} />
            </div>
        );
    }

    @autobind
    private async handleClick(actionType: string, seletedfile: any, event) {
        if (actionType === 'open') {
            window.open(
                window.location.protocol + "//" + window.location.host + seletedfile.ServerRelativeUrl + "?web=1",
                '_blank'
            );
        }
        else if (actionType === 'download') {
            window.open(
                window.location.protocol + "//" + window.location.host + seletedfile.ServerRelativeUrl + "?web=0",
                '_blank'
            );
        }
        else if (actionType === 'delete') {
            let list = sp.web.lists.getByTitle("Policies");
            await list.items.getById(seletedfile["ListItemAllFields.ID"]).delete();
            this.props.ondatachange();
        }
    }
}