import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { ICalloutProps, ICalloutState } from './ICalloutProps';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import styles01 from './Callout.module.scss';
import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http'


export default class CalloutComponent extends BaseDialog {
  public itemTitle: string;
  public itemID: number;
  public spcontext?: any | null;

  public render(): void {
    ReactDOM.render(<Cillout itemID={this.itemID} spcontext={this.spcontext} Title={this.itemTitle} domElement={document.activeElement.parentElement} onDismiss={this.onDismiss.bind(this)} />,
      this.domElement);
  }

  public getConfig(): IDialogConfiguration {
    return {
      isBlocking: false
    };
  }

  private onDismiss() {
    ReactDOM.unmountComponentAtNode(this.domElement);
  }
}

class Cillout extends React.Component<ICalloutProps, ICalloutState> {

  constructor(props: ICalloutProps) {
    super(props);
    this.state = {
      Title: this.props.Title
    };

    this.setState({ Title: this.props.Title });
    this._saveClicked = this._saveClicked.bind(this);
    this._onChangedTitle = this._onChangedTitle.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div>
        <Callout
          className={styles01["ms-CalloutExample-callout"]}
          role="alertdialog"
          gapSpace={0}
          target={this.props.domElement}
          onDismiss={this.onDismiss.bind(this)}
          setInitialFocus={true}
          hidden={false}
        >
          <div className={styles01["ms-CalloutExample-header"]}>
            <p className={styles01["ms-CalloutExample-title"]}>
              Property panel
            </p>
          </div>
          <div className={styles01["ms-CalloutExample-inner"]}>
            <div className={styles01["ms-CalloutExample-content"]}>
              <p className={styles01["ms-CalloutExample-subText"]}>
                <TextField label="Title" value={this.state.Title} underlined onChanged={this._onChangedTitle} />
              </p>
            </div>
            <div className={styles01["ms-CalloutExample-actions"]}>
              <PrimaryButton text="Save" onClick={this._saveClicked} />
            </div>
          </div>
        </Callout>
      </div>
    );
  }
  private onDismiss(ev: any) {
    this.props.onDismiss();
  }

  private _onChangedTitle(newValue: string): void {
    this.setState({ Title: newValue });
  }

  private _saveClicked() {
    const body: string = JSON.stringify({
      '__metadata': {
        'type': 'SP.Data.' + this.props.spcontext.pageContext.list.title + 'ListItem'
      },
      'Title': this.state.Title
    });
    this.props.spcontext.spHttpClient.get(this.props.spcontext.pageContext.web.absoluteUrl + `/_api/web/lists/getbytitle('${this.props.spcontext.pageContext.list.title}')/items(` + this.props.itemID + ')', SPHttpClient.configurations.v1).then
      ((Response: SPHttpClientResponse) => {
        this.props.spcontext.spHttpClient.post(this.props.spcontext.pageContext.web.absoluteUrl + `/_api/web/lists/getbytitle('${this.props.spcontext.pageContext.list.title}')/items(` + this.props.itemID + ')', SPHttpClient.configurations.v1,
          {
            headers: {
              'Accept': 'application/json;odata=nometadata',
              'Content-type': 'application/json;odata=verbose',
              'odata-version': '',
              'IF-MATCH': Response.headers.get('ETag'),
              'X-HTTP-Method': 'MERGE'
            },
            body: body
          }).then((response: SPHttpClientResponse) => {
            console.log(`Status code: ${response.status}`);
            console.log(`Status text: ${response.statusText}`);
            this.props.onDismiss();
          });
      });
  }
}
