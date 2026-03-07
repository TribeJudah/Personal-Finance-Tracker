# 💰 Personal Finance Tracker

A fully functional, interactive personal finance tracker built with **React 18**, **React Router DOM**, **Tailwind CSS**, and **Recharts**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup

```bash
# 1. Navigate into the project folder
cd personal-finance-tracker

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open your browser at:
#    http://localhost:5173
```

---

## 📁 Project Structure

```
personal-finance-tracker/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.jsx           # Sticky navbar with React Router links
│   │   ├── landing/
│   │   │   ├── Hero.jsx             # Landing page hero with mock dashboard
│   │   │   ├── Features.jsx         # Features grid section
│   │   │   └── CTA.jsx              # Call-to-action section
│   │   ├── dashboard/
│   │   │   ├── BalanceCard.jsx      # Current balance with progress bar
│   │   │   ├── StatCards.jsx        # Income & expense cards with sparklines
│   │   │   ├── MonthlyChart.jsx     # Bar chart (Recharts) - last 6 months
│   │   │   └── CategoryChart.jsx    # Pie chart (Recharts) - spending by category
│   │   └── transactions/
│   │       ├── TransactionList.jsx  # Searchable, filterable, paginated list
│   │       └── AddTransactionForm.jsx # Form with validation & success state
│   ├── hooks/
│   │   └── useFinance.jsx           # Global state via React Context
│   ├── pages/
│   │   ├── LandingPage.jsx          # / route
│   │   └── DashboardPage.jsx        # /dashboard route
│   ├── utils/
│   │   └── formatters.js            # Currency, date formatting & color maps
│   ├── App.jsx                      # Router setup
│   ├── main.jsx                     # React DOM entry
│   └── index.css                    # Tailwind + custom styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✨ Features

### Landing Page (`/`)
- Animated hero with mock dashboard card preview
- Features grid with 6 key capabilities
- Dark-themed CTA section
- Responsive navbar with mobile menu

### Dashboard (`/dashboard`)
- **Balance Card** — Current balance with savings rate and expense progress bar
- **Stat Cards** — Income (green) & Expenses (red) with mini sparkline charts
- **Monthly Bar Chart** — 6-month income vs expenses comparison
- **Category Pie Chart** — Spending breakdown with legend
- **Transaction History** — Searchable, filterable (all/income/expense), paginated list with delete
- **Add Transaction Form** — Validated form with category-based income/expense detection

### Global State (`useFinance` hook)
- All data managed in React Context — no backend needed
- Pre-loaded with 10 sample transactions
- Add/delete transactions with instant UI updates
- Computed totals, category breakdowns, and monthly data

---

## 🛠 Tech Stack

| Library            | Purpose                        |
|--------------------|--------------------------------|
| React 18           | UI framework                   |
| React Router DOM 6 | Client-side routing            |
| Tailwind CSS 3     | Utility-first styling          |
| Recharts           | Bar & Pie charts               |
| Lucide React       | Icons                          |
| date-fns           | Date formatting                |
| Vite               | Build tool & dev server        |

---

## 🎨 Design Choices

- **Typography**: Playfair Display (headings) + DM Sans (body) + JetBrains Mono (numbers)
- **Color palette**: Emerald green (income/brand) · Red (expenses) · Slate (neutral)
- **Theme**: Light, clean, financial — professional but approachable

---

## 📦 Build for Production

```bash
npm run build
# Output in /dist folder
```
