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
	weather: {
		main: string;
		description: string;
	}[];
	sys: {
		country: string;
	};
};

type CardProps = {
	location: string;
};

const Card: React.FC<CardProps> = ({ location }) => {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
	const apiUrl = "https://api.openweathermap.org";

	const fetchWeather = async () => {
		setLoading(true);
		try {
			const response = await axios.get(
				`${apiUrl}/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`
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

	return (
		<div className="flex justify-center items-center mt-12">
			<div
				className="bg-cover bg-center rounded-md w-[350px] h-[400px] shadow-md shadow-teal-100"
				style={{
					backgroundImage: `url(https://images.unsplash.com/photo-1522518961115-07c922089dd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80)`,
				}}
			>
				<div className="flex justify-center items-center text-center flex-col gap-2">
					<Image
						src="/assets/cloud.png"
						alt="cloud"
						className="object-contain"
						width={120}
						height={120}
					/>
					<div className="flex justify-center items-center gap-2 text-center">
						<h2 className="text-2xl font-bold">{weather?.name} ,</h2>
						<p className="text-2xl font-bold">{weather?.sys?.country}</p>
					</div>
				</div>
				<div className="flex justify-center items-center text-center mt-5 gap-2">
					<p className="text-3xl ">{weather?.main?.temp}</p>
					<p className="text-lg">&deg;F</p>
				</div>

				<div className="mt-4 flex justify-center items-center text-center flex-col gap-4">
					<p>{weather?.weather[0]?.main}</p>

					<div className="flex justify-center items-center text-center gap-2">
						<Image
							src={"/assets/drop.png"}
							alt="cloud"
							className="object-contain"
							width={35}
							height={35}
						/>
						<p>{weather?.main?.humidity}%</p>
					</div>
					<div className="flex justify-center items-center gap-2">
						<Image
							src={"/assets/air-flow.png"}
							alt="cloud"
							className="object-contain"
							width={35}
							height={35}
						/>
						<p>{weather?.wind?.speed} mph</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
