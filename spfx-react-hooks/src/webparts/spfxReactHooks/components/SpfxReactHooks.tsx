import * as React from 'react';
import { useState, useEffect } from 'react';
import { ISpfxReactHooksProps } from './ISpfxReactHooksProps';
import { TextField, PrimaryButton } from 'office-ui-fabric-react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

function simplehooks(props: ISpfxReactHooksProps) {
  const [fruits, setfruits] = useState([])
  const [firstName, setFistName] = useState("No first Name")
  const [lastName, setLastName] = useState("No last Name")

  useEffect(() => {
    sp.setup({
      spfxContext: props.context
    });
    _getListItemsFromSP()
  }, []);

  const _getListItemsFromSP = async () => {
    const allItems: any[] = await sp.web.lists.getByTitle("Fruits").items.getAll();
    let titlevalues: string[] = [];
    allItems.forEach(function (v, i) {
      titlevalues.push(v.Title);
    })
    setfruits(titlevalues);
  }

  const _onbtnclick = () => {
    console.log('Changing value')
    setFistName('Ravichandran')
  }

  const _lastNameChanged = (changedvalue: any) => {
    setLastName(changedvalue)
  }


  return (<div>
    <b>Props value</b><br />
    {props.description}
    <br />
    <hr />
    <br />
    <b>State values</b><br />
    Name : {firstName + ' ' + lastName}
    <br />
    <br />
    <TextField label="Last Name" onChanged={_lastNameChanged} value={lastName} />
    <br />
    <br />
    <PrimaryButton text="Change First Name" onClick={() => _onbtnclick()} />
    <br />
    <hr />
    <br />
    <b>Loop async values from SharePoint List</b><br />
    {fruits.map(function (fruit, i) {
      return <h3 key={i}>{fruit}</h3>
    })}
  </div>);
}

export default simplehooks;