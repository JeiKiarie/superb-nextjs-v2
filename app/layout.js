import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Superb Care Services Ltd',
	description:
		'Elderly Home Care and Supported Living, Carers and Nursing Staffing Services',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
