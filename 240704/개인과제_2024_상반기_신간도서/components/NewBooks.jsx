import React from 'react';
import '../App.css';  

const NewBooks = ({ data }) => {
  return (
    <div>
      {data.map((monthData, index) => (
        <div key={index} className="month-section">
          <h2>{monthData.month}</h2>
          <div className="book-grid">
            {monthData.books.map((book, idx) => (
              <div key={idx} className="book-item">
                <img src={book.cover} alt={book.title} className="book-cover" />
                <p><strong>책:</strong> {book.title}</p>
                <p><strong>저자:</strong> {book.author}</p>
                <p><strong>출판사:</strong> {book.publisher}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewBooks;
