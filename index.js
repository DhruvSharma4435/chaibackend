const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000
const githubData = {
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hiteshchoudhary",
    "html_url": "https://github.com/hiteshchoudhary",
    "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
    "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
    "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
    "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
    "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
    "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "hiteshdotcom",
    "public_repos": 89,
    "public_gists": 4,
    "followers": 25255,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2024-06-22T18:02:17Z"
  }
app.get('/', (req, res) => {
  res.send('Welcome to the internet!! Happy surfing')
})
app.get('/twitter', (req, res) => {
    res.send('It is not ye implemented, but will update it soon')
})
app.get('/github', (req, res) =>{
    res.json(githubData)
})
app.get('/email', (req, res) => {
    res.send('dhruvsharma9454@gamil.com,  Please dont spam!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})