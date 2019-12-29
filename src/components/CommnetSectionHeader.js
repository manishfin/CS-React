import React, { Component } from 'react';
import {
  withStyles,
  Grid,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';

import { Search } from '@material-ui/icons';
import styles from '../assets/styles/jss/Main';

class CommentSectionHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      assign: '',
      notify: '',
      resolve: false,
      current: false,
      show: false,
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

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={[classes.containerSection, classes.borderBottom].join(' ')}>
        <Grid item container>
          <Grid item xs={6}><h3>Comments</h3></Grid>
          <Grid item container xs={6} className={classes.alignCenterJustifyRight}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="current"
                  checked={this.state.current}
                  onChange={this.onChangeCheckbox}
                  value={this.state.current}
                />
              }
              label="Current page only"
              className={[classes.marginRightZero, classes.nativeText].join(' ')}
            />
          </Grid>
        </Grid>
        <Grid item xs>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <OutlinedInput
              id="search"
              value={this.state.search}
              name='search'
              onChange={this.onChange}
              placeholder="search"
              startAdornment={<InputAdornment position="start"><Search className={classes.searchIcon} /></InputAdornment>}
              labelWidth={0}
              className={classes.searchBar}
            />
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}

export default (withStyles(styles)(CommentSectionHeader));

