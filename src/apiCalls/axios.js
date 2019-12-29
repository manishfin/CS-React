import Axios from 'axios';

function getUser() {
  const url = 'https://randomuser.me/api/';
  const data = {};
  const headers = { headers: {'Content-Type': 'application/json'}};

  return Axios.get(url, data, headers).then(response => {
    return response.data
  });
}

export function getData() {
  const users = [];
  for(let i = 0; i < 5; i++) {
    users.push(getUser())
  }

  return Promise.all(users);
}
