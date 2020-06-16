import * as React from 'react';
import styles from './SpfxReactCodeeditor.module.scss';
import { ISpfxReactCodeeditorProps } from './ISpfxReactCodeeditorProps';
import Editor from 'react-coder';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";


export interface ISpfxReactCodeeditorState {
  code: string;
}

export default class SpfxReactCodeeditor extends React.Component<ISpfxReactCodeeditorProps, ISpfxReactCodeeditorState> {
  constructor(props: ISpfxReactCodeeditorProps, state: ISpfxReactCodeeditorState) {
    super(props);
    this.state = ({
      code: `import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
    `})
  }
  public render(): React.ReactElement<ISpfxReactCodeeditorProps> {
    return (
      <div className={styles.spfxReactCodeeditor}>
        <AceEditor
          placeholder="Placeholder Text"
          mode="javascript"
          theme="monokai"
          name="blah2"
          onChange={(code) => this.setState({ code })}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={this.state.code}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }} />

      </div>
    );
  }
}
