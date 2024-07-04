import React, { useState } from 'react';
import './App.css';  // CSS 파일을 import 합니다.
import newBooksData from './data/books.json';  // JSON 데이터를 import 합니다.
import NewBooks from './components/NewBooks';  // NewBooks 컴포넌트를 import 합니다.

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  const renderMainGrid = () => (
    <div className="main-grid">
      {newBooksData.map((monthData, index) => (
        <button key={index} className="month-button" onClick={() => handleMonthClick(monthData.month)}>
          <img src={monthData.books[0].cover} alt={monthData.books[0].title} className="main-cover" />
          <p>{monthData.month}</p>
        </button>
      ))}
    </div>
  );

  const renderMonthBooks = () => {
    const monthData = newBooksData.find((data) => data.month === selectedMonth);

    return (
      <div>
        <button onClick={() => setSelectedMonth(null)}>뒤로가기</button>
        <NewBooks data={[monthData]} />
      </div>
    );
  };

  return (
    <div>
      <h1>1~6월 신간도서</h1>
      {selectedMonth ? renderMonthBooks() : renderMainGrid()}
    </div>
  );
};

export default App;
