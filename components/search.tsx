"use client";

import Image from "next/image";
import { useState } from "react";
import Router from "next/navigation";
import axios from "axios";
import Card from "./card";

const Search = () => {
	const [city, setCity] = useState("");
	const [temp, setTemp] = useState("");
	const [humidity, setHumidity] = useState("");
	const [wind, setWind] = useState("");
	const [err, setErr] = useState(false);
	const [loading, setLoading] = useState(false);

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.34&lon=-75.90&units=imperial&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`;

	const fetchWeather = (e: any) => {
		e.preventDefault();
		setLoading(true);
		axios.get(url).then((res) => {
			setCity(res.data);
			console.log("City: ", res.data);
			return <Card lat={res.data.coord.lat} lon={res.data.coord.lon} />;
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
			{/* 
			<div className=" flex justify-center items-center mt-12">
				<div className="bg-gradient-to-t from-teal-200 to-emerald-200 rounded-md w-[350px] h-[400px] shadow-md shadow-teal-100">
					<div className="flex justify-center items-center text-center flex-col gap-2 mt-10">
						<Image
							src="/assets/cloud.png"
							alt="cloud"
							className="object-contain"
							width={120}
							height={120}
						/>
						<h2 className="text-2xl">City:</h2>
					</div>
					<div className="flex justify-center items-center text-center mt-5 text-gray-600">
						<p className="text-3xl">{temp}</p>
						<p className="text-lg">&deg;F</p>
					</div>

					<div className="text-gray-600 mt-4 flex justify-center items-center text-center flex-col gap-2">
						<p className="text-sm">Partly Cloudy</p>

						<div className="flex  gap-2">
							<Image
								src={"/assets/drop.png"}
								alt="cloud"
								className="object-contain "
								width={20}
								height={20}
							/>
							<p className="text-sm">Humidity: {humidity}%</p>
						</div>
						<div className="flex  gap-2">
							<Image
								src={"/assets/air-flow.png"}
								alt="cloud"
								className="object-contain "
								width={20}
								height={20}
							/>
							<p className="text-sm">Wind: {wind} mph</p>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Search;
