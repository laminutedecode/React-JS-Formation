import React from 'react';
import data from './data.json';

 export default function MyComponent() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 3;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => setCurrentPage(prevPage => prevPage + 1);
  const prevPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {currentPosts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
      <button onClick={nextPage} disabled={indexOfLastPost >= data.length}>Next Page</button>
    </div>
  );
}


