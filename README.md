

---

## Expense Tracker App

### Overview
The **Expense Tracker App** is a user-friendly and responsive web application designed to help users manage their personal finances. It allows users to track their income and expenses, categorize transactions, and visualize spending trends through charts and data summaries. The app is built using **React** for dynamic UI rendering, **CSS** for styling, and **JavaScript** for handling the logic and data manipulation. It stores transaction data in **localStorage** to persist the user's data even after page refreshes.

### Features
- **Add Transactions**: Users can add income or expense transactions with details such as text description, amount, category, and date.
- **Real-Time Balance Calculation**: The app calculates the current balance based on income and expenses in real-time.
- **Transaction List**: All transactions are displayed in a list with details such as the description, amount, and category. Users can delete transactions from the list.
- **Categories**: Expenses are categorized into different types such as "Salary", "Food", "Rent", etc., to help users better track their spending.
- **Charts**: The app includes a dynamic pie chart to visualize the proportion of expenses in each category.
- **Responsive Design**: The app is designed to be fully responsive, providing an optimal experience on both desktop and mobile devices.
- **Dark Mode**: Users can toggle between light and dark modes for a customizable and comfortable interface.
- **Persistent Data**: All transactions and data are stored in **localStorage**, ensuring data is preserved even after a page refresh.

### Tech Stack
- **React**: For building the user interface and managing state.
- **JavaScript**: To handle app logic, transaction management, and data processing.
- **CSS**: For styling the app and ensuring responsiveness across devices.
- **Chart.js**: Used to render the pie chart to display categorized expenses.
- **localStorage**: To store transaction data so that it persists between page reloads.

### Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   ```
2. Navigate into the project directory:
   ```bash
   cd expense-tracker
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the app in your browser at `http://localhost:3000`.

### Screenshots
![image](https://github.com/user-attachments/assets/fc179ce9-6a95-479a-9389-958a50dcf387)
![image](https://github.com/user-attachments/assets/855d86fa-0b02-4aed-8cb1-fd3776a61c39)
![image](https://github.com/user-attachments/assets/7c267657-3ebc-48d9-aca8-d2740d49b516)


### Future Improvements
- **User Authentication**: Allow users to sign in and have a personalized experience with their own transactions.
- **Expense History**: Provide a detailed view of transactions for a specified date range.
- **Export Data**: Allow users to export their transaction data to CSV or Excel format.
- **Currency Conversion**: Add the ability to track expenses in different currencies and convert them.



---

