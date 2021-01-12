// This file handles all API-related stuff

let CLIENT_ID = "8fafffb4ea5194d&",
  baseUrl = "https://api.imgur.com/oauth2/authorize?";

export default {
  login() {
    window.location = `${baseUrl}client_id=${CLIENT_ID}&response_type=token`;
  },
  getImgs(token) {
    // GET imgs from user (you can use "me" as {{ username }} if authenticated)
    // https://api.imgur.com/3/account/{{username}}/images/{{page}}

    fetch("https://api.imgur.com/3/account/me/images/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  },
};
