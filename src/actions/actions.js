import * as Axios from '../apiCalls/axios';

export function getData() {
  return (dispatch) => {
    dispatch({
      type: 'INITIATE',
    });

    return Axios.getData().then((data) => {
      dispatch({
        type: 'SUCCESS',
        payload: {
          data,
        },
      });
    }, (error) => {
      console.log(error);
    });
  };
}

