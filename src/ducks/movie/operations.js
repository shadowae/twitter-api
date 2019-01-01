import axios from 'axios';
import actions from './actions';

const postRequestToken = () => (dispatch) => {
  axios.post('https://api.twitter.com/oauth/request_tokens', {
    headers: {
      oauth_callback: 'https://localhost.com',
    },
    auth: {
      oauth_consumer_key: 'vOnKlvh9jEg8Rrt4WlMvWuhrm',
      oauth_token: '400238919-EXqa7GCB2SfJVlUDFW7OuiRC847VAS5REi4AM6E2',
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: '1546327765',
      oauth_nonce: Date.now(),
      oauth_version: '1.0',
      oauth_signature: '0VoN6wXJ8C8AY%2BRzYCIgnF3Sf6E%3D',
    },

    responseType: 'json',
  })
    .then((response) => {
      console.log('This is the response', response);
      dispatch(actions.storeMovieList(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default {
  postRequestToken,
};
