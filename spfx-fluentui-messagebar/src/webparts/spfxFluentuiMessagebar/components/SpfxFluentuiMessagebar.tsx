import * as React from 'react';
import styles from './SpfxFluentuiMessagebar.module.scss';
import { ISpfxFluentuiMessagebarProps } from './ISpfxFluentuiMessagebarProps';
import { ISpfxFluentuiMessagebarState } from './ISpfxFluentuiMessagebarState';
import { escape } from '@microsoft/sp-lodash-subset';
import {
  MessageBarButton,
  Link,
  Stack,
  MessageBar,
  MessageBarType,
  DefaultButton, PrimaryButton, IStackTokens
} from 'office-ui-fabric-react';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

const InfoMessage = () => (
  <MessageBar>
    Info/Default MessageBar.
    <Link href="www.bing.com" target="_blank">
      Visit our website.
    </Link>
  </MessageBar>
);
const ErrorMessage = () => (
  <MessageBar
    messageBarType={MessageBarType.error}
    isMultiline={false}
    dismissButtonAriaLabel="Close"
  >
    Error MessageBar with single line, with dismiss button.
    <Link href="www.bing.com" target="_blank">
      Visit our website.
    </Link>
  </MessageBar>
);

const AccessMessage = () => (
  <MessageBar
    messageBarType={MessageBarType.blocked}
    isMultiline={false}
    dismissButtonAriaLabel="Close"
    truncated={true}
    overflowButtonAriaLabel="See more"
  >
    <b>Blocked MessageBar - single line, with dismiss button and truncated text.</b> Truncation is not available if you
    use action buttons or multiline and should be used sparingly. Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Morbi luctus, purus a lobortis tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum
    aliquam et nunc semper scelerisque. Curabitur vitae orci nec quam condimentum porttitor et sed lacus. Vivamus ac
    efficitur leo. Cras faucibus mauris libero, ac placerat erat euismod et. Donec pulvinar commodo odio sit amet
    faucibus. In hac habitasse platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque, laoreet enim. Fusce
    massa lorem, ultrices eu mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget,
    condimentum mauris.
  </MessageBar>
);

const WarningMessage = () => (
  <MessageBar
    messageBarType={MessageBarType.severeWarning}
    actions={
      <div>
        <MessageBarButton onClick={() => console.log('Yes clicked')}>Yes</MessageBarButton>
        <MessageBarButton onClick={() => console.log('No clicked')}>No</MessageBarButton>
      </div>
    }
  >
    SevereWarning MessageBar with action buttons which defaults to multiline.
    <Link href="www.bing.com" target="_blank">
      Visit our website.
    </Link>
  </MessageBar>
);

const SuccessQuestion = () => (
  <MessageBar
    actions={
      <div>
        <MessageBarButton onClick={() => console.log('Yes clicked')}>Yes</MessageBarButton>
        <MessageBarButton onClick={() => console.log('No clicked')}>No</MessageBarButton>
      </div>
    }
    messageBarType={MessageBarType.success}
    isMultiline={false}
  >
    Success MessageBar with single line and action buttons.
    <Link href="www.bing.com" target="_blank">
      Visit our website.
    </Link>
  </MessageBar>
);

const WarningQuestion = () => (
  <MessageBar
    messageBarType={MessageBarType.warning}
    isMultiline={false}
    dismissButtonAriaLabel="Close"
    actions={
      <div>
        <MessageBarButton onClick={() => console.log('Action clicked')}>Action</MessageBarButton>
      </div>
    }
  >
    Warning MessageBar content.
    <Link href="www.bing.com" target="_blank">
      Visit our website.
    </Link>
  </MessageBar>
);

const WarningLongMessage = () => (
  <MessageBar
    dismissButtonAriaLabel="Close"
    messageBarType={MessageBarType.warning}
    actions={
      <div>
        <MessageBarButton>Yes</MessageBarButton>
        <MessageBarButton>No</MessageBarButton>
      </div>
    }
  >
    <b>Warning defaults to multiline</b>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a
    lobortis tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper
    scelerisque. Curabitur vitae orci nec quam condimentum porttitor et sed lacus. Vivamus ac efficitur leo. Cras
    faucibus mauris libero, ac placerat erat euismod et. Donec pulvinar commodo odio sit amet faucibus. In hac habitasse
    platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque, laoreet enim. Fusce massa lorem, ultrices eu
    mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget, condimentum mauris.
    <Link href="www.bing.com" target="_blank">
      Visit our website.
    </Link>
  </MessageBar>
);

const stackTokens: IStackTokens = { childrenGap: 40 };

export default class SpfxFluentuiMessagebar extends React.Component<ISpfxFluentuiMessagebarProps, ISpfxFluentuiMessagebarState> {
  constructor(props: ISpfxFluentuiMessagebarProps, state: ISpfxFluentuiMessagebarState) {
    super(props);
    this.state = ({
      InfoMessage: false,
      ErrorMessage: false,
      AccessMessage: false,
      WarningMessage: false,
      SuccessQuestion: false,
      WarningQuestion: false,
      WarningLongMessage: false,
    })
  }
  public render(): React.ReactElement<ISpfxFluentuiMessagebarProps> {
    return (
      <div className={styles.spfxFluentuiMessagebar}>
        {(this.state.InfoMessage) ? <div><InfoMessage /><br /></div> : ''}
        {(this.state.ErrorMessage) ? <div><ErrorMessage /><br /></div> : ''}
        {(this.state.AccessMessage) ? <div><AccessMessage /><br /></div> : ''}
        {(this.state.WarningMessage) ? <div><WarningMessage /><br /></div> : ''}
        {(this.state.SuccessQuestion) ? <div><SuccessQuestion /><br /></div> : ''}
        {(this.state.WarningQuestion) ? <div><WarningQuestion /><br /></div> : ''}
        {(this.state.WarningLongMessage) ? <div><WarningLongMessage /><br /></div> : ''}
        <br />
        <br />
        <Stack horizontal tokens={stackTokens}>
          <PrimaryButton text="Show Info Message" onClick={() => this._showMessageClicked('InfoMessage')} />
          <PrimaryButton text="Show Error Message" onClick={() => this._showMessageClicked('ErrorMessage')} />
          <PrimaryButton text="Show Access Message" onClick={() => this._showMessageClicked('AccessMessage')} />
        </Stack>
        <br />
        <br />
        <Stack horizontal tokens={stackTokens}>
          <PrimaryButton text="Show Warning Message" onClick={() => this._showMessageClicked('WarningMessage')} />
          <PrimaryButton text="Show Success with Question Message" onClick={() => this._showMessageClicked('SuccessQuestion')} />
          <PrimaryButton text="Show Warning with Question Message" onClick={() => this._showMessageClicked('WarningQuestion')} />
        </Stack>
        <br />
        <br />
        <Stack horizontal tokens={stackTokens}>
          <PrimaryButton text="Show Long Message" onClick={() => this._showMessageClicked('WarningLongMessage')} />
          <PrimaryButton text="Show info message and hide after 5 sec" onClick={this._showandhideMessageClicked} />
          <DefaultButton text="Hide All Message" onClick={this._hideMessageClicked} />
        </Stack>

      </div>
    );
  }

  @autobind
  private _showMessageClicked(messagetype: string): void {
    if (messagetype == 'InfoMessage')
      this.setState({ InfoMessage: true })
    else if (messagetype == 'ErrorMessage')
      this.setState({ ErrorMessage: true })
    else if (messagetype == 'AccessMessage')
      this.setState({ AccessMessage: true })
    else if (messagetype == 'WarningMessage')
      this.setState({ WarningMessage: true })
    else if (messagetype == 'SuccessQuestion')
      this.setState({ SuccessQuestion: true })
    else if (messagetype == 'WarningQuestion')
      this.setState({ WarningQuestion: true })
    else if (messagetype == 'WarningLongMessage')
      this.setState({ WarningLongMessage: true })
  }

  @autobind
  private _hideMessageClicked(): void {
    this.setState({
      InfoMessage: false, ErrorMessage: false, AccessMessage: false, WarningMessage: false,
      SuccessQuestion: false, WarningQuestion: false, WarningLongMessage: false
    })
  }

  @autobind
  private _showandhideMessageClicked(): void {
    this.setState({ InfoMessage: true })
    setTimeout(function () {
      this.setState({ InfoMessage: false })
    }.bind(this), 5000);
  }


}
