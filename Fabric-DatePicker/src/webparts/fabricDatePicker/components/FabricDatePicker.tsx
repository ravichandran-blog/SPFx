import * as React from 'react';
import { IFabricDatePickerProps, IFabricDatePickerWebpartProps } from './IFabricDatePickerProps';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions, IHttpClientOptions } from '@microsoft/sp-http'
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import styles from './FabricDatePicker.module.scss';

export default class FabricDatePicker extends React.Component<IFabricDatePickerProps, IFabricDatePickerWebpartProps> {

    private etag: String = undefined;
    public constructor(props: IFabricDatePickerProps, state: IFabricDatePickerWebpartProps) {
        super(props);
        this.state = {
            birthday: null,
            message:''
        };

        if (Environment.type === EnvironmentType.SharePoint) {
            this.props.spcontect.spHttpClient.get(this.props.spcontect.pageContext.web.absoluteUrl + '/_api/web/lists/getbytitle(\'sampleLIST\')/items(1)', SPHttpClient.configurations.v1).then
                ((Response: SPHttpClientResponse) => {
                   // this.etag = Response.headers.get('ETag');
                    Response.json().then((listItem: any) => {
                        this.setState({ birthday: new Date(listItem.Birthday) });
                    });
                });

        }
        else if (Environment.type === EnvironmentType.Local) {
            // return (<div>Whoops! you are using local host...</div>);
        }

        this._alertClicked = this._alertClicked.bind(this);
    }

    public render(): React.ReactElement<IFabricDatePickerProps> {
        return (
            <div className={styles.fabricDatePicker}>
                <div id="DivLocalHost"></div>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <Label>Birthday</Label>
                        <DatePicker placeholder="Select a date..."
                            onSelectDate={this._onSelectDate}
                            value={this.state.birthday}
                            formatDate={this._onFormatDate}
                            minDate={new Date(2000,12,30)}
                            isMonthPickerVisible={false}
                        />
                        <div>
                        <div className={styles.label}>
                        <label>{this.state.message}</label>
                        </div>
                        <div className={styles.button}>                     
                            <PrimaryButton data-automation-id="test"
                                text="Save"
                                onClick={this._alertClicked} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

    private _onSelectDate = (date: Date | null | undefined): void => {
        this.setState({ birthday: date });
    };

    private _onFormatDate = (date: Date): string => {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    };

    private _alertClicked(): void {
        const body: string = JSON.stringify({
            '__metadata': {
                'type': 'SP.Data.SampleLISTListItem'
            },
            'Birthday': this.state.birthday
        });
        this.props.spcontect.spHttpClient.get(this.props.spcontect.pageContext.web.absoluteUrl + '/_api/web/lists/getbytitle(\'sampleLIST\')/items(1)', SPHttpClient.configurations.v1).then
        ((Response: SPHttpClientResponse) => {
          this.props.spcontect.spHttpClient.post(this.props.spcontect.pageContext.web.absoluteUrl + `/_api/web/lists/getbytitle('sampleLIST')/items(1)`,
          SPHttpClient.configurations.v1,
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
              // Access properties of the response object. 
              this.setState({ message: 'Successfully saved' });
              console.log(`Status code: ${response.status}`);
              console.log(`Status text: ${response.statusText}`);

              //response.json() returns a promise so you get access to the json in the resolve callback.
              response.json().then((responseJSON: JSON) => {
                  console.log(responseJSON);
              });
          });
        });
        
    }

}
