import * as rssParser from "react-native-rss-parser";

const RssFeedService = {
  get(url) {
   return fetch(url)
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData)).
    catch(() => console.error('Error in fetching the website'))
  }
};

export default RssFeedService;
