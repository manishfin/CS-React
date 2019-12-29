import { green } from '@material-ui/core/colors';

const styles = (theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
  },
  searchBar: {
    height: 35,
  },
  searchIcon: {
    color: '#888',
  },
  toolbarRoot: { background: '#F5F5F5' },
  alignCenterJustifyCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignTopJustifyRight: {
    display: 'flex',
    flexDirection:"row-reverse",
    alignItems: 'start',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  alignCenterJustifyRight: {
    display: 'flex',
    flexDirection:"row-reverse",
    alignItems: 'center',
  },
  marginRightZero: {
    marginRight: 0,
  },
  mainContainer: {
    margin: '30px 0',
    border: '1px solid #DDD',
    minHeight: 500,
    width: 400,
    // background: '#EFEFEF',
    // background: 'yellow',
  },
  borderBottom: {
    borderBottom: '1px solid #DDD',
  },
  containerSection: {
    background: '#F5F5F5',
    padding: '30px 15px',
    width: '100%',
  },
  contentSection: {
    padding: '15px 15px 0 15px',
    width: '100%',
  },
  border: {
    border: '1px solid #DDD',
  },
  insideContainer: {
    padding: '5px 5px 5px 15px',
    borderBottom: '1px solid #DDD',
    minWidth: 0,
    // background: 'red',
  },
  insidePadding: {
    padding: '5px 15px 5px 15px',
  },
  comSet: {
    padding: 15,
  },
  topPadding: {
    paddingTop: 15,
  },
  pointer: {
    cursor: 'pointer', 
  },
  inlineText: {
    margin: 0,
    padding: 0,
    display: 'inline'
  },
  smallButton: {
    padding: 0,
    margin: 0,
    minWidth: 0,
    color: '#888',
  },
  paperContainer: {
    width: '100%',
    marginLeft: 0,
  },
  marginBottom: {
    marginBottom: 15
  },
  greenText: {
    color: green[400],
  },
  borderTop: {
    borderTop: '1px solid #DDD',
  },
  nativeText: {
    color: '#555',
    fontSize: 15,
  },
  alignText: {
    color: '#555',
    fontSize: 15,
    paddingRight: 5,
  },
  formControl: {
    minWidth: '78%',
  },
}));

export default styles;