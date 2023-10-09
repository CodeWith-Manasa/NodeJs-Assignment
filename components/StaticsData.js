import React, { useState, useEffect } from 'react';

export default function StaticsData() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/blog-stats');
        const data = await response.json();
        setBlogs(data);
        console.log("fetch");
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, []);

  return (
    <div>
      <h2 style={{"margin-top":"5%","text-align":"center"}}>Blog Analysis</h2>
      {blogs ? (
        <div className="statistics">
          <div className="statistic">
            <h3>Total Blogs</h3>
            <p>{blogs.totalBlogs}</p>
          </div>
          <div className="statistic">
            <h3>Longest Blog</h3>
            <p>{blogs.longestBlog}</p>
          </div>
          <div className="statistic">
            <h3>Blogs with 'Privacy' in Title</h3>
            <p>{blogs.blogsWithPrivacy}</p>
          </div>
          <div className="statistic">
            <h3>Unique Blog Titles</h3>
            <ul className="bullet-list">
              {blogs.uniqueBlogTitles.map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p style={{"text-align":"center"}}>Loading...</p>
      )}
    </div>
  );
}
