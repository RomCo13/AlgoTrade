# AlgoTrade

This project demonstrates a simple rule based alert system for cryptocurrency prices. A NestJS backend manages user defined rules and a Vite/React frontend allows creating those rules. When a rule condition is met a push notification placeholder is triggered.

## Backend

The backend is located in `backend/` and uses NestJS. Rules are stored in memory and periodically evaluated using a random price generator. When conditions are met a message is logged (replace this with real push notification logic).

### Running

```bash
cd backend
npm install
# install dependencies
npm run build
npm start
```

The server listens on `http://localhost:3001`.

## Frontend

The frontend is under `frontend/` and was bootstrapped with Vite + React. It allows adding rules and listing existing ones.

### Running

```bash
cd frontend
npm install
npm run dev
```

The app will be available on `http://localhost:3000`.

## Notes

Prices and notifications are mocked. Integrate a real price feed and push notification service (e.g., APNs) for production use.
