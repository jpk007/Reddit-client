import axios from "axios";
export function getSubRedditData(subreddit) {
  let url = `https://www.reddit.com/r/${subreddit}.json`;
  fetch(url).then((response) => {
    console.log({ response });
  });
}
export async function getInitSubRedditData() {
  let url = `https://api.reddit.com/subreddits.json`;
  let response = await apiCall(url);
  return await Promise.resolve(response?.data);
}
async function apiCall(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url);
      resolve(response);
    } catch (error) {
      reject();
    }
  });
}
