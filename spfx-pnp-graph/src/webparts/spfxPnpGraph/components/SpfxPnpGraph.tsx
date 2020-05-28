import * as React from 'react';
import styles from './SpfxPnpGraph.module.scss';
import { ISpfxPnpGraphProps } from './ISpfxPnpGraphProps';
import { ISpfxPnpGraphState, IUserItem } from './ISpfxPnpGraphState';
import {
  DocumentCardActivity
} from 'office-ui-fabric-react/lib/DocumentCard';
import { graph } from "@pnp/graph";
import "@pnp/graph/users"
import "@pnp/graph/contacts"

export default class SpfxPnpGraph extends React.Component<ISpfxPnpGraphProps, ISpfxPnpGraphState> {
  constructor(props: ISpfxPnpGraphProps, state: ISpfxPnpGraphState) {
    super(props);
    graph.setup({
      spfxContext: this.props.context
    });
    this.state = { description: '', users: [] }
    this._getPeople()
  }

  private async _getPeople() {
    var users: Array<IUserItem> = new Array<IUserItem>();
    const peoplecol = await graph.me.people.top(15)();
    peoplecol.map((people: any) => {
      users.push({
        displayName: people.displayName,
        url: this.props.context.pageContext.web.absoluteUrl + '/PersonImmersive.aspx?accountname=i%3A0%23%2Ef%7Cmembership%7C' + people.userPrincipalName,
        userPrincipalName: people.userPrincipalName,
        profileImageSrc: this.props.context.pageContext.web.absoluteUrl + "/_layouts/15/userphoto.aspx?size=L&username=" + people.userPrincipalName,
        jobTitle: people.jobTitle
      });
    });
    this.setState({ users: users })
  }

  public render(): React.ReactElement<ISpfxPnpGraphProps> {
    return (
      <div className={styles.spfxPnpGraph}>
        {this.state.users.map(function (people, i) {
          return <DocumentCardActivity
            activity={people.jobTitle}
            people={[{ name: people.displayName, profileImageSrc: people.profileImageSrc }]}
          />
        })
        }
      </div>
    );
  }
}
