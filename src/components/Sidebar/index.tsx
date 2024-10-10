import { Sheet, SheetContent, SheetDescription, SheetTitle } from '@/components/ui/sheet';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Separator } from '../ui/separator';

export default function Sidebar({ open, setOpen }) {
	const navItems = [
		{ name: 'Dashboard', href: '#' },
		{ name: 'Users', href: '#' },
		{ name: 'Licenses', href: '#' },
		{ name: 'Settings', href: '#' },
	];

	return (
		<>
			{/*  Mobile Screen Sidebar  */}
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetContent side='left' className='w-64 bg-white shadow-lg'>
					<SheetTitle>
						<VisuallyHidden.Root>Menu</VisuallyHidden.Root>
					</SheetTitle>
					<SheetDescription>
						<VisuallyHidden.Root>Description goes here</VisuallyHidden.Root>
					</SheetDescription>
					<h2 className='flex items-center text-2xl font-bold text-gray-800 p-4'>
						License Server
					</h2>
					<Separator />
					<nav className='flex flex-col space-y-2'>
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className='flex items-center px-4 py-2 text-base font-medium text-gray-700 transition-colors duration-200 rounded-lg hover:bg-gray-200 hover:text-gray-900'
							>
								{item.name}
							</a>
						))}
					</nav>
				</SheetContent>
			</Sheet>

			<div className='hidden md:flex md:flex-shrink-0'>
				<div className='flex flex-col w-64'>
					<div className='flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r'>
						<div className='flex flex-col items-center flex-shrink-0 px-4 mb-6'>
							<a
								href='#'
								className='text-2xl font-bold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline'
							>
								Dashboard
							</a>
						</div>
						<nav className='flex-1 px-4 space-y-4 bg-white'>
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className='flex items-center px-4 py-3 text-base font-medium text-gray-700 transition-colors duration-200 rounded-lg hover:bg-gray-200 hover:text-gray-900'
								>
									{item.name}
								</a>
							))}
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}
