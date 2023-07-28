# Vid Stats 360 Dashboard

Vid Stats 360 is a dashboard homepage that provides users with a synopsis of video usage within their account on the platform. The dashboard displays various video transcoding metrics and offers time series graphs for each day's data. Users can filter the data for the last seven days, 14 days, and 30 days.

## Backend API

The backend API is built using Next.js server-side endpoints. It provides the necessary video usage data in JSON format to populate the dashboard. The API endpoint is located at `/api/get-dashboard-data` and returns the required data.

## Frontend Dashboard

The frontend dashboard is developed using React.js. It consists of the following components:

- **Card Blocks:** Three card blocks that show the total usage of the entity.
- **Daily Aggregation Charts:** Three charts that display the daily aggregation of video transcoding metrics:
  - Streaming Usage (seconds)
  - Transcoding Usage (seconds)
  - Storage Usage (seconds)
- **Top Asset Table:** A table that lists the top assets based on usage.

## Installation
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
## Technologies Used

- React
- NextJS 13
- Chart.js
- react-chartjs-2
- TypeScript
- moment
- Tailwind
- HTML
- CSS