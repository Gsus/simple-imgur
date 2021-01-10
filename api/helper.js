let CLIENT_ID = "8fafffb4ea5194d&",
  baseUrl = "https://api.imgur.com/oauth2/authorize?";

export default {
  login() {
    window.location = `${baseUrl}client_id=${CLIENT_ID}&response_type=token`;
  }
};
