import * as React from 'react';
// import styles from './SpfxReactCodeeditor.module.scss';
// import { ISpfxReactCodeeditorProps } from './ISpfxReactCodeeditorProps';
// import { escape } from '@microsoft/sp-lodash-subset';
// import Editor from '@monaco-editor/react';



// export interface ISpfxReactCodeeditorState {
//   code: string;
// }

// export default class SpfxReactCodeeditor extends React.Component<ISpfxReactCodeeditorProps, ISpfxReactCodeeditorState> {
//   constructor(props:ISpfxReactCodeeditorProps,state:ISpfxReactCodeeditorState)
//   {
//     super(props);
//     this.state=({code:`import React from "react";
//     import ReactDOM from "react-dom";

//     function App() {
//       return (
//         <h1>Hello world</h1>
//       );
//     }

//     ReactDOM.render(<App />, document.getElementById("root"));
//     `})
//   }
//   public render(): React.ReactElement<ISpfxReactCodeeditorProps> {
//     return (
//       <div className={ styles.spfxReactCodeeditor }>

//         <Editor height="90vh" language="javascript" />;
//       </div>
//     );
//   }
// }

import { useRef, useState } from "react";

import Editor from "@monaco-editor/react";

function SpfxReactCodeeditor() {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const valueGetter = useRef();

  function handleEditorDidMount(_valueGetter) {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  }

  function handleShowValue() {
    //alert(valueGetter.current());
  }

  return (
    <>
      <button onClick={handleShowValue} disabled={!isEditorReady}>
        Show value
      </button>

      <Editor
        height="90vh"
        language="javascript"
        value={"// write your code here"}
        editorDidMount={handleEditorDidMount}
      />
    </>
  );
}

export default SpfxReactCodeeditor;