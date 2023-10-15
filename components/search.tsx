"use client";

import Image from "next/image";
import { useState } from "react";
import Router from "next/navigation";
import axios from "axios";
import Card from "./card";

const Search = () => {
	const [city, setCity] = useState("");
	const [temp, setTemp] = useState("");
	const [loading, setLoading] = useState(false);

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.41&lon=139.41&units=imperial&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`;

	const fetchWeather = (e: any) => {
		e.preventDefault();
		setLoading(true);
		axios.get(url).then((res) => {
			setCity(res.data);
			console.log("City: ", res.data);
			return <Card />;
		});
		setTemp("");
		setLoading(false);
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
					onClick={fetchWeather}
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
		</div>
	);
};

export default Search;
