import React, { useEffect, useState } from 'react';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { EllipsisVertical } from 'lucide-react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

// Define the License interface
interface License {
	SNo: number;
	licenseName: string;
	issueDate: string;
	expireDate: string;
	licenseNumber: string;
	status: string;
}

const LicenseTableComponent: React.FC = () => {
	const [licenses, setLicenses] = useState<License[]>([]);

	useEffect(() => {
		// Fetch the data from the JSON file
		const fetchData = async () => {
			try {
				const response = await fetch('/data.json');
				const data = await response.json();

				// Set the licenses from the data (assuming licenses are under the "License Details" section)
				setLicenses(
					data.find((item: any) => item.tittle === 'License Details').licenses
				);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className='mt-8'>
			<h3 className='text-2xl font-medium text-gray-700 mb-4'>
				License Information
			</h3>
			<Table>
				<TableCaption>A list of your licenses.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[50px]'>S.No</TableHead>
						<TableHead>License Name</TableHead>
						<TableHead>Issue Date</TableHead>
						<TableHead>Expire Date</TableHead>
						<TableHead>License Number</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{licenses.map((license) => (
						<TableRow key={license.SNo}>
							<TableCell className='font-medium'>{license.SNo}</TableCell>
							<TableCell>{license.licenseName}</TableCell>
							<TableCell>{license.issueDate}</TableCell>
							<TableCell>{license.expireDate}</TableCell>
							<TableCell>{license.licenseNumber}</TableCell>
							<TableCell
								className={
									license.status === 'Active'
										? 'text-green-600'
										: 'text-red-600'
								}
							>
								{license.status}
							</TableCell>
							<TableCell>
								<Dialog>
									<DialogTrigger asChild>
										<Button variant='secondary'>
											<EllipsisVertical />
										</Button>
									</DialogTrigger>
									<DialogContent className='sm:max-w-md'>
										<DialogHeader>
											<DialogTitle>
												License Number {license.licenseNumber}
											</DialogTitle>
											<DialogDescription>
												Edit the Lincense details.
											</DialogDescription>
										</DialogHeader>
										<div className='grid gap-4 py-4'>
											<div className='grid grid-cols-4 items-center gap-4'>
												<Label htmlFor='name' className='text-right'>
													Name
												</Label>
												<Input
													id='name'
													value='Pedro Duarte'
													className='col-span-3'
												/>
											</div>
											<div className='grid grid-cols-4 items-center gap-4'>
												<Label htmlFor='username' className='text-right'>
													Username
												</Label>
												<Input
													id='username'
													value='@peduarte'
													className='col-span-3'
												/>
											</div>
										</div>
										<DialogFooter>
											<Button type='submit'>Save changes</Button>
										</DialogFooter>
									</DialogContent>
								</Dialog>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default LicenseTableComponent;
