import Image from "next/image";

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
	weatherData: WeatherData | null;
};

const Card: React.FC<CardProps> = ({ weatherData }) => {
	if (weatherData) {
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
							<h2 className="text-2xl font-bold">{weatherData?.name} ,</h2>
							<p className="text-2xl font-bold">{weatherData?.sys?.country}</p>
						</div>
					</div>
					<div className="flex justify-center items-center text-center mt-5 gap-2">
						<p className="text-3xl ">{weatherData?.main?.temp}</p>
						<p className="text-lg">&deg;F</p>
					</div>

					<div className="mt-4 flex justify-center items-center text-center flex-col gap-4">
						<p>{weatherData?.weather[0]?.main}</p>

						<div className="flex justify-center items-center text-center gap-2">
							<Image
								src={"/assets/drop.png"}
								alt="cloud"
								className="object-contain"
								width={35}
								height={35}
							/>
							<p>{weatherData?.main?.humidity}%</p>
						</div>
						<div className="flex justify-center items-center gap-2">
							<Image
								src={"/assets/air-flow.png"}
								alt="cloud"
								className="object-contain"
								width={35}
								height={35}
							/>
							<p>{weatherData?.wind?.speed} mph</p>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <div>No Weather Data available!</div>;
	}
};

export default Card;
