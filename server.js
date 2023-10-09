const express = require('express')
const app = express();
const _ = require('lodash');
const cors = require('cors');
const axios = require('axios');
const port = 3000

app.use(cors());

app.get('/api/blog-stats', async (req, res) => {
  console.log("data")
  const config = {
    headers: {
      'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
    }
  }
  try {
    const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', config)
    const blogs = response.data.blogs;
    const totalBlogs = blogs.length;
    const longestBlog = _.maxBy(blogs, 'title.length');
    const blogsWithPrivacy = _.filter(blogs, blog => _.includes(_.lowerCase(blog.title), 'privacy'));
    const uniqueTitles = _.uniqBy(blogs, blogs.title);
    const statistics = {
      totalBlogs,
      longestBlog: longestBlog.title,
      blogsWithPrivacy: blogsWithPrivacy.length,
      uniqueBlogTitles: uniqueTitles.map(blog => blog.title),
    };
    res.json(statistics);
  }
  catch (error) {
    console.error('Error fetching and analyzing data:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }

})

app.get('/api/blog-search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter "query" is required.' });
  }

  const config = {
    headers: {
      'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
    }
  }
  try {
    const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', config)
    const blogs = response.data.blogs;
    const searchResults = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );
    res.json(searchResults);
  }
  catch (error) {
    console.error('Error fetching and analyzing data:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }

});



app.listen(port, () => {
  console.log(`server is runing on  port ${port}`)
})