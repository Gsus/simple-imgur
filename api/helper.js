// This file handles all API-related stuff

let CLIENT_ID = "8fafffb4ea5194d&",
  baseUrl = "https://api.imgur.com/oauth2/authorize?";

export default {
  login() {
    window.location = `${baseUrl}client_id=${CLIENT_ID}&response_type=token`;
  },
  async fetchImgs(token) {
    // GET imgs from user (you can use "me" as {{ username }} if authenticated)
    // https://api.imgur.com/3/account/{{username}}/images/{{page}}

    const res = await fetch("https://api.imgur.com/3/account/me/images/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // This will return an object with props "data", "success", and "status"
    const imagesData = await res.json();
    // We only care about the "data",
    // since it has the array of images (in the form of objects)
    return imagesData.data;
  },
  async uploadImgs(token) {
    console.log(token);
    // Make requests
  },
};
