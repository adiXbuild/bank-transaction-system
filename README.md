# 🏦 Bank Transaction System

A robust, backend-only banking and transaction system built with **(MEN) -MongoDB, Express, and  Node.js**. 

This project simulates real-world banking logic by abandoning hardcoded account balances in favor of a **Bank like System**. It calculates user balances dynamically using MongoDB Aggregation Pipelines and ensures financial data integrity using ACID-compliant database sessions and Idempotency keys.

## ✨ Features

*   **Secure Authentication:** User registration and login using `bcryptjs` for password hashing and JSON Web Tokens (JWT) stored securely in cookies.
*   **Token Blacklisting:** Secure logout functionality that blacklists active JWTs with a Time-To-Live (TTL) index to prevent token hijacking.
*   **Automated Email Notifications:** Integrates `Nodemailer` with the Gmail API (OAuth2) to send automated welcome emails and transaction alerts.
*   **Immutable Ledger System:** Records strict "Debit" and "Credit" entries for every transaction. Ledger records are locked and cannot be updated or deleted once created.
*   **Dynamic Balance Calculation:** Uses MongoDB Aggregation Pipelines to calculate an account's real-time balance based on its debit and credit history.
*   **ACID Transactions:** Utilizes MongoDB Sessions to ensure that fund transfers are "all-or-nothing." If a transfer fails midway, the entire database transaction rolls back, preventing lost funds.
*   **Idempotency Keys:** Prevents duplicate transactions and double-spending by requiring unique idempotency keys for fund transfers (mirroring real-world payment gateways like UPI).

## 🛠️ Tech Stack

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB Atlas
*   **ODM:** Mongoose
*   **Security:** `bcryptjs`, `jsonwebtoken`, `cookie-parser`
*   **Services:** `nodemailer`, Google Cloud Console (Gmail API)


