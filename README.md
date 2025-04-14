# Expense Tracker App

A simple React application that helps you manage your personal finances by recording, categorizing, and analyzing your expenses.

## Features

- Add new expenses with ease.
- Search and filter expenses in real-time.
- Delete expenses you no longer want to track.
- Responsive and user-friendly interface.

## Tech Stack

- **React** – Frontend library for building the UI.
- **JavaScript** – App logic and interactions.
- **CSS** – Styling the app.

## Components

### `App.js`
Main component that:
- Maintains the list of expenses (`useState`).
- Handles saving and deleting expenses.
- Integrates child components: `AddExpense`, `SearchBar`, and `Table`.

### `AddExpense.js`
A form component that allows users to input a new expense, including description, amount, and category.

### `SearchBar.js`
Takes user input to filter the list of expenses displayed in the table.

### `Table.js`
Displays the list of expenses. Includes delete functionality per row.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

   2.Install dependencies
   ```
   npm install

   ```
   3.Start the development server
   ```
   npm start
   ```
   The app will run at http://localhost:3000.

   Folder Structure
```
   src/
├── components/
│   ├── Table.js
│   └── SearchBar.js
├── AddExpense.js
├── App.js
├── App.css
└── index.js
```