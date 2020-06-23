import * as React from 'react';
import styles from './SpfxReactMaterialui.module.scss';
import { ISpfxReactMaterialuiProps } from './ISpfxReactMaterialuiProps';
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

export default class SpfxReactMaterialui extends React.Component<ISpfxReactMaterialuiProps, {}> {
  public render(): React.ReactElement<ISpfxReactMaterialuiProps> {
    return (
      <div className={styles.spfxReactMaterialui}>
        <FormControl variant={"outlined"}>
          <TextField style={{ width: '400px' }} id="outlined-basic" label="First name" variant="outlined" />
        </FormControl>
        <br />
        <br />
        <FormControl variant={"outlined"}>
          <TextField style={{ width: '400px' }} id="outlined-basic1" label="Last name" variant="outlined" />
        </FormControl>
        <br />
        <br />
        <FormControl variant={"outlined"}>
          <FormLabel component="legend">Premium plan</FormLabel>
          <Switch color="primary" name="checkedB" inputProps={{ 'aria-label': 'primary checkbox' }} />
        </FormControl>
        <br />
        <br />
        <FormControl variant={"outlined"}>
          <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
          <Select style={{ width: '400px' }}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // value={state.age}
            // onChange={handleChange}
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
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
          <FormControlLabel value="female" control={<Radio color="primary" />} label="female" />
          <FormControlLabel value="male" control={<Radio color="primary" />} label="male" />
          <FormControlLabel value="other" control={<Radio color="primary" />} label="other" />
        </RadioGroup>
        <br />
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checkedB} onChange={handleChange} 
              name="checkedB" color="primary" />
          }
          label="I agree to all the terms and conditions"
        />
        <br />
        <br />
        <Button variant="contained" color="primary">Save</Button>






      </div>
    );
  }
}
