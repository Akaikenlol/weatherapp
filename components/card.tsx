"use client";

import Image from "next/image";
import { useState } from "react";

const Card = () => {
	const [city, setCity] = useState("");
	const [temp, setTemp] = useState(null);
	const [humidity, setHumidity] = useState("");
	const [wind, setWind] = useState("");
	const [err, setErr] = useState(false);

	const getWeather = () => {
		setErr(false);
		setTemp(null);
	};

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
					<h2 className="text-2xl">Tokyo, Japan</h2>
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
		</div>
	);
};

export default Card;
