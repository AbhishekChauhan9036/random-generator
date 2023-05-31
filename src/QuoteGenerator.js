import React, { useState } from 'react';

const QuoteGenerator = () => {
  const quotes = [
    "1 Sandeep Tripathi",
    "2 Ankush Singh",
    "3 Purushottam",
    "4 Akhilesh Soni",
    "5 Abhishek Chauhan",
    "6 Pallavi Uthekar",
    "7 Mohd Arshad",
    "8 Chandrashekhar Maurya",
    "9 Sivansh Sharma",
    "10 Vaibhav Tripathi"
  ];

  const [randomQuote, setRandomQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setRandomQuote(randomQuote);
  };

  return (
    <div>
      <h1>Random Name Generator</h1>
      <button onClick={generateRandomQuote}>Generate Name</button>
      <p>{randomQuote}</p>
    </div>
  );
};

export default QuoteGenerator;
