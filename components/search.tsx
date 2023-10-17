"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Card from "./card";

const Search = () => {
	const [city, setCity] = useState("");
	const [WeatherData, setWeatherData] = useState([]);
	const [error, setError] = useState(null);

	const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
	const apiUrl = "https://api.openweathermap.org";

	const handleSearch = async () => {
		if (city.trim() === "") {
			return;
		}

		try {
			const response = await axios.get(
				`${apiUrl}/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
			);
			setWeatherData(response.data);
		} catch (error) {
			console.log("Error fetching weather data: ", error);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center mt-10 gap-2">
			<div className="flex justify-center items-center gap-5">
				<div className="bg-gradient-to-l from-emerald-200 to-teal-200 rounded-md h-10 w-[300px] flex justify-center items-center shadow-sm shadow-teal-100">
					<input
						type="text"
						className="bg-transparent h-10 w-[300px] p-5 rounded-md text-gray-600 placeholder-gray-600 outline-none"
						placeholder="Search City"
						onChange={(e) => setCity(e.target.value)}
					/>
				</div>
				<button
					className="bg-emerald-200 hover:bg-teal-100 ease-in-out duration-300 p-2 rounded-md shadow-sm shadow-teal-100"
					onClick={handleSearch}
				>
					<Image
						src="/assets/magnifying-glass.png"
						alt="logo"
						width={24}
						height={24}
						className="object-contain "
					/>
				</button>
			</div>
			{WeatherData ? (
				<Card location={city} />
			) : (
				<div>{error || "There ain't no data"}</div>
			)}
		</div>
	);
};

export default Search;
