"use client";

import Image from "next/image";
import { useState } from "react";
import Router from "next/navigation";
import axios from "axios";

const Search = () => {
	const [city, setCity] = useState("");
	const [temp, setTemp] = useState(null);
	const [humidity, setHumidity] = useState("");
	const [wind, setWind] = useState("");
	const [err, setErr] = useState(false);

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.34&lon=-75.90&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`;

	const getWeather = () => {
		setErr(false);
		setTemp(null);
	};

	const options = {
		method: "GET",
		url: "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={3fa57aa740535ff4aff79e5a4c604490}",
		params: { q: { city } },
		headers: {},
	};

	return (
		<div className="flex justify-center items-center mt-10 gap-2">
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
				onClick={getWeather}
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
	);
};

export default Search;
