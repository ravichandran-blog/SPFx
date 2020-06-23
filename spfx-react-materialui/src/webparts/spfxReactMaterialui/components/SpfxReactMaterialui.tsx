import * as React from 'react';
import styles from './SpfxReactMaterialui.module.scss';
import { ISpfxReactMaterialuiProps } from './ISpfxReactMaterialuiProps';
import { ISpfxReactMaterialuiState } from './ISpfxReactMaterialuiState';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { IItemAddResult } from "@pnp/sp/items";
import { autobind } from 'office-ui-fabric-react';


export default class SpfxReactMaterialui extends React.Component<ISpfxReactMaterialuiProps, ISpfxReactMaterialuiState> {
  constructor(props: ISpfxReactMaterialuiProps, state: ISpfxReactMaterialuiState) {
    super(props);
    this.state = ({ age: 0, firstname: '', gender: '', isAgreed: false, lastname: '', premiumplan: false })
  }
  public render(): React.ReactElement<ISpfxReactMaterialuiProps> {
    return (
      <div className={styles.spfxReactMaterialui}>
        <FormControl variant={"outlined"}>
          <TextField style={{ width: '400px' }} id="outlined-basic" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { this.setState({ firstname: event.target.value }) }} label="First name" variant="outlined" />
        </FormControl>
        <br />
        <br />
        <FormControl variant={"outlined"}>
          <TextField style={{ width: '400px' }} id="outlined-basic1" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { this.setState({ lastname: event.target.value }) }} label="Last name" variant="outlined" />
        </FormControl>
        <br />
        <br />
        <FormControl variant={"outlined"}>
          <FormLabel component="legend">Premium plan</FormLabel>
          <Switch color="primary" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { this.setState({ premiumplan: event.target.checked }) }} name="checkedB" inputProps={{ 'aria-label': 'primary checkbox' }} />
        </FormControl>
        <br />
        <br />
        <FormControl variant={"outlined"}>
          <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
          <Select style={{ width: '400px' }}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { this.setState({ age: parseInt(event.target.value) }) }}
            label="Age"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
        <br />
        <br />
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup row aria-label="position" name="position" defaultValue="top"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => { this.setState({ gender: event.target.value }) }}>
          <FormControlLabel value="female" control={<Radio color="primary" />} label="female" />
          <FormControlLabel value="male" control={<Radio color="primary" />} label="male" />
          <FormControlLabel value="other" control={<Radio color="primary" />} label="other" />
        </RadioGroup>
        <br />
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB" color="primary"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => { this.setState({ isAgreed: event.target.checked }) }}></Checkbox>
          }
          label="I agree to all the terms and conditions"
        />
        <br />
        <br />
        <Button variant="contained" disabled={!this.state.isAgreed} color="primary" onClick={this.saveinfo}>Save</Button>
      </div>
    );
  }

  @autobind
  private async saveinfo() {
    const iar: IItemAddResult = await sp.web.lists.getByTitle("People").items.add({
      Title: this.state.firstname,
      LastName: this.state.lastname,
      Premiumplan: this.state.premiumplan,
      Age: this.state.age,
      Gender: this.state.gender
    });
  }
}
