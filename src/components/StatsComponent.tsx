import React, { useEffect, useState } from 'react';

interface Stat {
	title: string;
	value: string | number;
	percentage: number;
	isPositive: boolean;
}

const StatsComponent: React.FC = () => {
	const [sellStats, setSellStats] = useState<Stat[]>([]);
	const [licenseStats, setLicenseStats] = useState<Stat[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/data.json');
				const data = await response.json();

				// Set sell stats and license stats
				setSellStats(data[0].value); // "Sold Items"
				setLicenseStats(data[1].value); // "License"
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	const renderArrow = (isPositive: boolean) => (
		<svg
			className='w-4 h-4 mr-1'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d={isPositive ? 'M18 15L12 9L6 15' : 'M6 9L12 15L18 9'}
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);

	return (
		<div>
			{/* Render Sold Items stats */}
			<div className='grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
				{sellStats.map((stat, index) => (
					<div
						key={index}
						className='p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg mb-4'
					>
						<h4 className='text-xl font-semibold text-gray-900 mb-2'>
							{stat.title}
						</h4>
						<div className='flex items-center justify-between'>
							<span className='text-xl font-medium  text-gray-900'>
								{stat.value}
							</span>
							<span
								className={`flex items-center px-2 py-0.5 mx-2 text-sm ${
									stat.isPositive
										? 'text-green-600 bg-green-100'
										: 'text-red-600 bg-red-100'
								} rounded-full`}
							>
								{renderArrow(stat.isPositive)}
								<span>{stat.percentage}%</span>
							</span>
						</div>
					</div>
				))}
			</div>

			{/* Render License stats */}
			<div className='grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3'>
				{licenseStats.map((stat, index) => (
					<div
						key={index}
						className='p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg'
					>
						<h4 className='text-xl font-bold text-gray-900'>{stat.title}</h4>
						<div className='flex items-center justify-between'>
							<span className='text-2xl font-bold text-gray-900'>
								{stat.value}
							</span>
							<span
								className={`flex items-center px-2 py-0.5 mx-2 text-sm ${
									stat.isPositive
										? 'text-green-600 bg-green-100'
										: 'text-red-600 bg-red-100'
								} rounded-full`}
							>
								{renderArrow(stat.isPositive)}
								<span>{stat.percentage}%</span>
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default StatsComponent;
