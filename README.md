## Project Overview

This project is part of the Powerful Frontend Web Development subject assignment.
The purpose of this project is to practice React components, state management, and lifting state up concepts through a short, timed exercise using the React framework.

## Component Structure
App<br>
└── Dashboard<br>
     ├── Counter (1)<br>
     └── Counter (2)<br>

## Component Explanation
- App.js<br>
App is the main entry of the project. It renders Dashboard component

- Dashboard.js<br>
Dashboard is the parent component that manages both counters’ values using React’s useState. Whenever a counter changes, the dashboard updates its internal state and keeps track of the total count from both counters and also includes a reset button to give users a quick way to set the counter to zero

- Counter.js<br>
Each counter is a child component that shows the current count and lets users increase or decrease. When a change happens, the counter sends that update back up to the Dashboard through the onCountChange function. And if the value resets to zero, the useEffect will clears the timestamp, making all the counts reset again.