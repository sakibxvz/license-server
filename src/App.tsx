import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsComponent from './components/StatsComponent';
import LicenseTableComponent from './components/LicenseTableComponent';
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/components/ui/accordion';
export default function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [isItOpen, setIsItOpen] = useState(false);

	const handleAccordionToggle = () => {
		setIsItOpen(!isItOpen); // Toggle accordion open/close
	};
	return (
		<div className='flex h-screen overflow-hidden bg-gray-100'>
			<Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
			<div className='flex flex-col flex-1 overflow-hidden'>
				<Header setSidebarOpen={setSidebarOpen} />
				<main className='flex-1 overflow-x-hidden overflow-y-auto'>
					<div className='container px-6 py-8 mx-auto'>
						{/* Accordion with StatsComponent */}
						<Accordion type='single' collapsible>
							<AccordionItem value='item-1'>
								<AccordionTrigger
									onClick={handleAccordionToggle}
									className='flex items-center justify-between'
								>
									<span>Show Statistics</span>
								</AccordionTrigger>
								<AccordionContent>
									{/* StatsComponent will be displayed within the accordion content */}
									<StatsComponent />
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<LicenseTableComponent />
					</div>
				</main>
			</div>
		</div>
	);
}
