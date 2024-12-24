```javascript
// pages/aboutSolution.js
// Using the browser's built-in fetch API
export default async function About() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return (
      <div>
        <h1>About Page</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <h1>About Page</h1>
        <p>Error fetching data. Please try again later.</p>
      </div>
    );
  }
}
```