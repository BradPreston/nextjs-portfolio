import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Brad Preston',
	description: 'My professional portfolio showcasing my recent projects, blog posts, and accomplishments.'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} bg-plum`}>{children}</body>
		</html>
	);
}
