import axios from "axios";

export async function getServerSideProps() {
	const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
	const apiUrl = "https://api.openweathermap.org";
	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=imperial`
		);

		const weatherData = response.data;

		return {
			props: { weatherData },
		};
	} catch (error) {
		console.error("Error fetching weather data:", error);
		return {
			props: { weatherData: null },
		};
	}
}

function Home({ weatherData }: any) {
	if (!weatherData) {
		return <div>Error fetching weather data.</div>;
	}

	// Add your weather display code here
	return (
		<div>
			<h1>Weather in {weatherData.name}</h1>
			<p>Temperature: {weatherData.main.temp}&deg;F</p>
			<p>Humidity: {weatherData.main.humidity}%</p>
			{/* Add more weather information as needed */}
		</div>
	);
}

export default Home;
