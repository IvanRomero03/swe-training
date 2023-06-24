import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://leetcode.com/graphql/',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    query: '\n    query questionTitle($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    title\n    titleSlug\n    isPaidOnly\n    difficulty\n  content\n  likes\n    dislikes\n  }\n}\n    ',
    variables: {titleSlug: 'path-with-maximum-gold'},
    operationName: 'questionTitle'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});