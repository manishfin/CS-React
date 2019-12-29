import React, { Component } from 'react';
import {
  withStyles,
  Grid,
  FormControl,
  TextField,
  Button,
  NativeSelect,
  FormControlLabel,
  Collapse,
  Avatar,
} from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/Settings';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import GreenCheckbox from '../components/GreenCheckbox';
import styles from '../assets/styles/jss/Main';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      assign: '',
      notify: '',
      current: '',
      name: '',
      show: false,
      resolve: false,
      count: 0,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeCheckbox = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleClick = () => {
    this.setState({ show: !this.state.show })
  }

  increaseCount = () => {
    this.setState({ count: (this.state.count + 1) })
  }

  getName = (data) => {
    if (data) return data.results[0].name.first + ' ' + data.results[0].name.last;
  }

  getImage = (data) => {
    if(data) return data.results[0].picture.thumbnail;
  }

  render() {
    const { classes, data, comment } = this.props;
    return (
      <Grid container className={classes.contentSection}>
        <Grid item xs={12} className={classes.border}>
          <Grid item container className={classes.insideContainer}>
            <Grid item xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <NativeSelect
                  id="assign"
                  name="assign"
                  value={this.state.assign}
                  onChange={this.onChange}
                  disableUnderline={true}
                  className={classes.nativeText}
                >
                  <option value={10}>Team Comment</option>
                  <option value={20}>Public Comment</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item container xs={6}>
              <Grid item xs className={[classes.alignCenterJustifyRight, classes.alignText].join(' ')}>Notify: </Grid>
              <Grid item xs={5} className={classes.alignCenter}>
                <FormControl fullWidth variant="outlined">
                  <NativeSelect
                    id="notify"
                    name="notify"
                    value={this.state.notify}
                    onChange={this.onChange}
                    disableUnderline={true}
                    className={classes.nativeText}
                  >
                    <option value={0}>None</option>
                    <option value={10}>Team 1</option>
                    <option value={20}>Team 2</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item container xs className={classes.comSet}>
              <Grid item container>
                <Grid item xs={2} onClick={this.handleClick} className={classes.pointer}>
                  <Avatar src={this.getImage(data)} />
                </Grid>
                <Grid item container xs>
                  <Grid item xs={12} onClick={this.handleClick} className={classes.pointer}>
                    <div>
                      <h3 className={classes.inlineText}>{this.getName(data)}: </h3>
                      <span>{comment}</span>
                    </div>
                  </Grid>
                  <Grid item xs={12} className={classes.alignCenter}>
                    <span>a few second ago </span>
                    <Button onClick={this.increaseCount}><FavoriteBorderIcon fontSize="small" color="secondary" /></Button>
                    <span>{this.state.count}</span>
                  </Grid>
                </Grid>
                <Grid item xs={2} className={classes.alignTopJustifyRight}>
                  <Button className={classes.smallButton}><SettingsIcon fontSize="small" /></Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.paperContainer}>
              <Collapse in={this.state.show} timeout="auto">
                <Grid item container className={[classes.comSet, classes.borderTop].join(' ')}>
                  <TextField
                    multiline={true}
                    rows={3}
                    fullWidth 
                    id=""
                    label=""
                    type="message"
                    variant="outlined"
                    placeholder="What's your response?"
                  />
                  <Grid container className={classes.topPadding}>
                    <Button variant="contained" color="primary">Add Comment</Button>
                  </Grid>
                </Grid>
                <Grid item container className={[classes.insidePadding, classes.borderTop].join(' ')}>
                  <Grid item className={classes.alignCenter} xs={6}>
                    <FormControl fullWidth variant="outlined" className={classes.formControl}>
                      <NativeSelect
                        id="assign"
                        name="assign"
                        value={this.state.assign}
                        onChange={this.onChange}
                        disableUnderline={true}
                        className={classes.nativeText}
                      >
                        <option value={10}>Assign to someone</option>
                        <option value={20}>Public Comment</option>
                      </NativeSelect>
                    </FormControl>
                  </Grid>
                  <Grid item container xs={6} className={classes.alignCenterJustifyRight}>
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                          name="resolve"
                          checked={this.state.resolve}
                          onChange={this.onChangeCheckbox}
                          value={false}
                        />
                      }
                      label="Resolve"
                      className={[classes.marginRightZero, classes.greenText].join(' ')}
                    />
                  </Grid>
                </Grid>
              </Collapse>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default (withStyles(styles)(User));