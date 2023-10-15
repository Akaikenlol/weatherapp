"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

type WeatherData = {
	name: string;
	main: {
		temp: number;
		humidity: number;
	};
	wind: {
		speed: number;
	};
};

const Card = ({ lat, lon }: any) => {
	// const [weather, setWeather] = useState({});
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
	const apiUrl = "https://api.openweathermap.org";

	const fetchWeather = async () => {
		setLoading(true);
		try {
			const response = await axios.get(
				`${apiUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
			);
			setWeather(response.data);
			setLoading(false);
		} catch (error: any) {
			setError(error);
		}
	};

	useEffect(() => {
		fetchWeather();
	}, []);

	// if (!weather) {
	// 	return (
	// 		<div className="flex justify-center items-center mt-12">
	// 			<div className="flex justify-center items-center bg-gradient-to-t from-teal-200 to-emerald-200 rounded-md w-[350px] h-[100px] shadow-md shadow-teal-100">
	// 				Loading....
	// 			</div>
	// 		</div>
	// 	);
	// } else {
	// 	return (
	// 		<div className="flex justify-center items-center mt-12">
	// 			<div className="flex justify-center items-center bg-gradient-to-t from-teal-200 to-emerald-200 rounded-md w-[350px] h-[100px] shadow-md shadow-teal-100">
	// 				{weather.name}
	// 			</div>
	// 		</div>
	// 	);
	// }

	return (
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
					<h2 className="text-2xl">City: {weather?.name}</h2>
				</div>
				<div className="flex justify-center items-center text-center mt-5 text-gray-600">
					<p className="text-3xl">{weather?.main?.temp}</p>
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
						<p className="text-sm">Humidity: {}%</p>
					</div>
					<div className="flex  gap-2">
						<Image
							src={"/assets/air-flow.png"}
							alt="cloud"
							className="object-contain "
							width={20}
							height={20}
						/>
						<p className="text-sm">Wind: {} mph</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
