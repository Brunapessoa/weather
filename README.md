# Weatherly

A weather forecast web app built with React and Vite, consuming the WeatherAPI and Unsplash APIs.

🔗 **Demo:** https://brunapessoa.github.io/weather/

## Features

- Automatic geolocation on load via the browser's native Geolocation API, with manual city search as fallback
- Toggle between current weather view and 5-day forecast
- Dynamic background images fetched per searched city via Unsplash
- Loading and error states with conditional rendering
- Forecast displayed in a CSS Grid layout with aligned date, max, and min temperature columns
- Search via form submission — supports both button click and Enter key

## Tech Stack

- **React 19 + Vite** — component-based UI with fast development server
- **Tailwind CSS v4** — utility-first styling
- **WeatherAPI** — current conditions and 5-day forecast data
- **Unsplash API** — dynamic city photography as card backgrounds

## Architecture

### State and data flow

State is managed centrally in `App.jsx` using `useState`, with data passed down to child components as props. No external state library — the app scope makes prop drilling readable and traceable.

### API integration

`fetchWeather` and `fetchCityImg` are separate `async/await` functions in `App.jsx`. City image fetching is triggered from *inside* `fetchWeather` after weather data resolves — not from UI event handlers directly — so the search term is always the resolved city name from the API response, not raw user input. This ensures consistency for partial or ambiguous city names.

### Dynamic backgrounds

Tailwind CSS compiles class names at build time, which makes it incompatible with runtime-generated values like API image URLs. Background images are applied via React's `style` prop:

```jsx
style={cityImg ? { backgroundImage: `url(${cityImg})` } : {}}
```

## Running locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

Builds to `dist/` and pushes to the `gh-pages` branch.

## License

[MIT](LICENSE)
