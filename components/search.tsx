"use client";

import Image from "next/image";

const Search = () => {
	return (
		<div className="flex justify-center items-center mt-10 gap-2">
			<div className="bg-orange-200 rounded-md h-10 w-[300px] flex justify-center items-center">
				<input
					type="text"
					className="bg-transparent h-10 w-[300px] p-5 rounded-md text-gray-500 placeholder-gray-400 outline-none"
					placeholder="Search City"
				/>
			</div>

			<button className="bg-orange-200 hover:bg-cyan-200 ease-in-out duration-300 p-2 rounded-md">
				<Image
					src="/assets/search-gray.svg"
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
