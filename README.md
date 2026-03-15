# 🌬️ Wind Power Forecast Monitoring Dashboard

A full-stack web application that visualizes and evaluates wind power generation forecasts for the United Kingdom.

This application allows users to compare **actual wind generation** with **forecasted generation**, analyze forecast accuracy, and explore forecast errors over time.

The project was built as part of the **Full Stack Software Engineer challenge for REint AI**.

---

# 🚀 Live Application

🌐 **Deployed App**  
https://wind-power-forecast-dashboard.vercel.app/

📂 **GitHub Repository**  
https://github.com/SekharSunkara6/Wind-Power-Forecast-Dashboard.git

---

# 📊 Project Overview

Wind power generation is highly dependent on weather conditions and therefore difficult to forecast accurately.

This application provides a **forecast monitoring dashboard** that helps users understand:

• How accurate wind generation forecasts are  
• How forecast errors behave across time  
• How forecast horizon impacts accuracy  

The dashboard allows users to:

✔ Select **start time and end time**  
✔ Adjust **forecast horizon (0–48 hours)**  
✔ Compare **actual vs forecast generation**  
✔ View **forecast error metrics**

---

# 🖥️ Application Features

### 📈 Interactive Forecast Visualization
Displays:

🔵 **Actual wind power generation**  
🟢 **Forecasted wind generation**

Users can visually compare the forecast against actual generation.

---

### ⏱ Forecast Horizon Control
A slider allows the user to select a **forecast horizon between 0–48 hours**.

For each target time, the system selects the **latest forecast published before the chosen horizon**.

Example:

Target Time: `24 May 2024 18:00`  
Forecast Horizon: `4 hours`

Forecast selected = **latest forecast created before 14:00**

---

### 📊 Forecast Error Metrics

The dashboard calculates:

| Metric | Description |
|------|-------------|
| **MAE** | Mean Absolute Error |
| **RMSE** | Root Mean Square Error |
| **P99 Error** | 99th percentile forecast error |

These metrics help quantify forecast reliability.

---

### 🔍 Interactive Chart Features

The chart supports:

✔ Zoom  
✔ Pan  
✔ Tooltip inspection  
✔ Responsive design  

Built using **Chart.js** for smooth visualization.

---

# 📂 Dataset

The application uses datasets provided by the **UK electricity market data platform**.

### Actual Wind Generation

API Endpoint:

https://bmrs.elexon.co.uk/api-documentation/endpoint/datasets/FUELHH/stream

Fields used:

| Field | Description |
|------|-------------|
| `startTime` | Target generation time |
| `generation` | Wind power generated |
| `fuelType` | WIND |

Resolution: **30 minutes**

---

### Forecasted Wind Generation

API Endpoint:

https://bmrs.elexon.co.uk/api-documentation/endpoint/datasets/WINDFOR/stream

Fields used:

| Field | Description |
|------|-------------|
| `startTime` | Target generation time |
| `publishTime` | Time forecast was created |
| `generation` | Forecast generation |

Forecast horizon considered:

```
0 – 48 hours
```

Only **January 2024 data** is used for the analysis.

Missing forecast data points are **ignored and not plotted**.

---

# 🧠 Forecast Analysis

A separate **Jupyter Notebook analysis** is included in the repository:

```
analysis/wind_forecast_analysis.ipynb
```

The analysis explores:

• Forecast error distribution  
• Error variation by time of day  
• Generation distribution  
• Reliable wind generation estimates  

### Key metrics analyzed

- Mean Absolute Error (MAE)
- Root Mean Square Error (RMSE)
- P99 forecast error

---

### Wind Power Reliability Analysis

Wind generation fluctuates due to weather variability.

To estimate reliable supply capacity, the analysis evaluates the **generation distribution percentiles**.

A conservative planning approach uses the **P10 generation level**, which represents generation exceeded **90% of the time**.

This helps determine how much wind power can **reliably contribute to electricity demand**.

---

# 🏗️ Tech Stack

### Frontend

• **Next.js**  
• **React**  
• **TailwindCSS**  
• **Chart.js**

---

### Backend

• **Next.js API Routes**  
• **Axios**

---

### Data Analysis

• **Python**  
• **Pandas**  
• **NumPy**  
• **Matplotlib**  
• **Seaborn**

---

### Deployment

The application is deployed using:

**▲ Vercel**

---

# 📁 Project Structure

```
wind-power-forecast-app
│
├── app/
│   └── page.tsx
│
├── components/
│   ├── ForecastChart.tsx
│   ├── Header.tsx
│   ├── Loader.tsx
│   └── ErrorMetrics.tsx
│
├── pages/
│   └── api/
│       └── data.ts
│
├── public/
│   └── reint-logo.webp
│
├── analysis/
│   └── wind_forecast_analysis.ipynb
│
├── README.md
│
└── package.json
```

---

# ⚙️ Running the Application Locally

### 1️⃣ Clone the repository

```
git clone https://github.com/SekharSunkara6/Wind-Power-Forecast-Dashboard.git
```

---

### 2️⃣ Navigate into the project

```
cd Wind-Power-Forecast-Dashboard
```

---

### 3️⃣ Install dependencies

```
npm install
```

---

### 4️⃣ Start the development server

```
npm run dev
```

---

### 5️⃣ Open in browser

```
http://localhost:3000
```

---

# 📊 Mobile Responsiveness

The dashboard UI is designed to work on:

✔ Desktop  
✔ Tablet  
✔ Mobile devices  

The layout adapts automatically for smaller screens.

---

# 🤖 AI Assistance Disclosure

AI tools were used **only to assist with development**, including:

• Debugging  
• Code suggestions  
• Documentation drafting  

All **design decisions, architecture choices, and analysis reasoning were performed independently.**

---

# 🎥 Demo Video

(Will be added in submission email)

The demo video demonstrates:

• Frontend dashboard functionality  
• Backend API integration  
• Forecast analysis notebook  
• Key insights from the analysis

---

# 📦 Submission Package

The final submission includes:

✔ GitHub repository  
✔ Jupyter analysis notebook  
✔ Deployed web application  
✔ Demo video  
✔ Repository zip archive (including `.git` history)

---
# 👤 Candidate Details

**Name:** PurnaSekhar Sunkara  

**Github:** (https://github.com/SekharSunkara6)

**Vercel:** (https://vercel.com/sunkara-purnasekhars-projects)

**Wellfound:** (https://wellfound.com/u/sunkara-purnasekhar)

**LinkedIn:** (https://www.linkedin.com/in/sekhar-sunkara-1b869b1a8/)

**Phone:** (+91 9121975699)

**Resume:** (https://drive.google.com/file/d/1U6jr8S7LIr_-4TUPrkZrJhwQ69GKHYoP/view?usp=sharing)

---

Includes:

• Demo video link  
• App demo link  
• Repo archive link  

---

# ⭐ Acknowledgment

This project was developed as part of the **REint AI Full Stack Software Engineer challenge**.

The goal was to build a production-quality monitoring tool capable of visualizing forecast performance and extracting insights from wind power generation data.
