// index.js
const express = require('express');
const readline = require('readline');
const calculator = require('./calculator');

const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve a simple HTML form for the calculator interface
app.get('/', (req, res) => {
  res.send(`
    <h1>Node.js Calculator4</h1>
    <form method="POST" action="/calculate">
      <input type="number" name="num1" required placeholder="First number" />
      <select name="operator" required>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" name="num2" required placeholder="Second number" />
      <button type="submit">Calculate</button>
    </form>
  `);
});

// Handle the form submission and perform calculation
app.post('/calculate', (req, res) => {
  const { num1, num2, operator } = req.body;
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  
  let result;
  switch (operator) {
    case '+':
      result = calculator.add(n1, n2);
      break;
    case '-':
      result = calculator.subtract(n1, n2);
      break;
    case '*':
      result = calculator.multiply(n1, n2);
      break;
    case '/':
      result = calculator.divide(n1, n2);
      break;
    default:
      result = 'Invalid operator';
  }

  // Display the result
  res.send(`
    <h1>Node.js Calculator15</h1>
    <p>Result: ${result}</p>
    <a href="/">Go Back</a>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
