// This file handles all API-related stuff

const CLIENT_ID = "e9da1fcab1b1d37",
  BASE_URL = "https://api.imgur.com";

export default {
  login() {
    window.location = `${BASE_URL}/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`;
  },
  async fetchImgs(token) {
    // GET imgs from user (you can use "me" as {{ username }} if authenticated)
    // https://api.imgur.com/3/account/{{username}}/images/{{page}}

    const res = await fetch(`${BASE_URL}/3/account/me/images/`, {
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
  async uploadImgs(images, token) {
    // First, we need to use a FormData instance in order to actually upload the images
    // Make array out of images (since it's technically a FileList object)
    images = Array.from(images);
    // We'll use fetch to upload the images, and so, it will return a promise,
    // and by using map(), we'll end up with an array of promises
    const promisesArr = images.map((image) => {
      // Create FormData and append current img to it, like putting a photo inside an envelope or something
      const formData = new FormData();
      formData.append("image", image);
      // Make the actual request with said image
      return fetch(`https://api.imgur.com/3/image`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
    });
    // Resolve one final promise when all promises within the array are done (or when one of them gets rejected)
    return Promise.all(promisesArr);
  },
};