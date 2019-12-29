import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  withStyles,
  AppBar,
  Grid,
  Toolbar,
  CssBaseline
} from '@material-ui/core';

import { map } from 'lodash';

import ActionCreators from '../actions';
import User from '../components/User';
import CommentSectionHeader from '../components/CommnetSectionHeader';
import styles from '../assets/styles/jss/Main';

const comments = ['Maybe we can use light gray?',
  'Too much white spaces',
  'Too small fonts',
  `Let's make this smaller`,
  'Looks good for me'];

class Home extends Component {
  componentDidMount() {
    this.props.getData();
  }

  getUsers = (data) => {
    return map(data, (user, index) => {
      return (
        <Grid item key={index}>
            <User data={user} comment={comments[index]} />
        </Grid>
      )
    })
  }

  render() {
    const { classes, data } = this.props;
    return (
      <div>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar className={classes.toolbarRoot} />
        </AppBar>
        <Grid container className={classes.alignCenterJustifyCenter}>
          <Grid item className={classes.mainContainer}>
            <Grid item container>
              <CommentSectionHeader />
            </Grid>
            <Grid item container className={classes.marginBottom}>
              { this.getUsers(data) }
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    data: state.user.data,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home)));

