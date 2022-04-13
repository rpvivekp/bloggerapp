import React from 'react';
import './App.css';

function App(props) {
  
  const bookdet=(
    <ul>
      {props.book.map((book)=>
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      )}
    </ul>
  )
  const content=(
    <ul>
      {props.blog.map((blog)=>
        <div key={blog.id}>
          <h1>{blog.blogName}</h1>
          <h3>{blog.pname}</h3>
          <h4>{blog.para}</h4>
        </div>
      )}
    </ul>
  )


  const coursedet=(
    <ul>
      {props.det.map((detail)=>
        <div key={detail.id}>
          <h1>{detail.name}</h1>
          <h4>{detail.date}</h4>
        </div>
      )}
    </ul> 
  )

  return (
    <div>
    <table className="table">
    <tr>
      <div>
      <td>
      <div className="mystyle1">
          <h1 className="tableheader
">Course Details</h1>
          {coursedet}
        </div>
        </td>
        <td className="tin">
        <div className="st2">
          <h1 className="tableheader">Book Details</h1>
          {bookdet}
        </div>
        </td>
        <td>
        <div className="v1">
          <h1 className="tableheader">Blog Details</h1>
          {content}
        </div>
        </td>
      </div>
      </tr>
      </table>
    </div>
  );
}

export default App;
