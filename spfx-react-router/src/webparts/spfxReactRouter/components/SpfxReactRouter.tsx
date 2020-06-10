import * as React from 'react';
import styles from './SpfxReactRouter.module.scss';
import { ISpfxReactRouterProps } from './ISpfxReactRouterProps';
import SpfxCustomersFiles from './SpfxCustomersFiles';
import SpfxCustomers from './SpfxCustomers';
import SpfxCustomerDetails from './SpfxCustomerDetails';
import { HashRouter, Route } from "react-router-dom";
import { Nav, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';

const navStyles: Partial<INavStyles> = { root: { width: 300 } };
const stackTokens: IStackTokens = { childrenGap: 40 };

const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'React Components',
    links: [
      {
        key: 'Customers',
        name: 'Customers',
        url: '#/',
      },
      {
        key: 'CustomerDetails',
        name: 'Customer Details',
        url: '#/Customer/153',
      },
      {
        key: 'Customerfiles',
        name: 'Customer files',
        url: '#/CustomerFiles',
      },
    ],
  }
];


export default class SpfxReactRouter extends React.Component<ISpfxReactRouterProps, {}> {

  public render(): React.ReactElement<ISpfxReactRouterProps> {
    return (
      <div className={styles.spfxReactRouter}>
        <Stack horizontal tokens={stackTokens}>
          <Nav styles={navStyles} ariaLabel="Nav example similiar to one found in this demo page" groups={navLinkGroups} />
          <HashRouter>
            <Route path="/" exact component={SpfxCustomers}></Route>
            <Route path="/Customer/:id" component={SpfxCustomerDetails}></Route>
            <Route path="/CustomerFiles/" component={SpfxCustomersFiles}></Route>
          </HashRouter>
        </Stack>
      </div>
    );
  }
}
