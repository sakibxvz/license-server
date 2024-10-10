import { Button } from '@/components/ui/button';
import { Bell, Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '../ui/input';

export default function Header({ setSidebarOpen }) {
	return (
		<header className='flex items-center justify-between px-6 py-4 bg-white border-b'>
			<div className='flex items-center flex-grow'>
				{' '}
				{/* Added flex-grow to this div */}
				<Button
					variant='ghost'
					size='icon'
					className='md:hidden'
					onClick={() => setSidebarOpen(true)}
				>
					<Menu className='h-6 w-6' />
				</Button>
				{/* Search bar */}
				<div className='ml-2 flex flex-grow'>
					{' '}
					{/* Make this div flex-grow to take more space */}
					<Input
						type='text'
						placeholder='Search License...'
						className='flex-1 border-gray-300' // Keep flex-1 for the input
					/>
					<Button className='mx-3'>Search</Button>
				</div>
			</div>
			<div className='flex items-center'>
				<Button variant='ghost' size='icon'>
					<Bell className='h-6 w-6' />
				</Button>
				<Avatar className='ml-4'>
					<AvatarImage
						src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
						alt='User avatar'
					/>
					<AvatarFallback>JD</AvatarFallback>
				</Avatar>
			</div>
		</header>
	);
}
