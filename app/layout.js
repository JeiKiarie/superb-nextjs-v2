import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
// import { useMediaQuery } from '@chakra-ui/media-query';
import Sidebar from './components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Superb Care Services Ltd',
	description:
		'Elderly Home Care and Supported Living, Carers and Nursing Staffing Services',
};

export default function RootLayout({ children }) {
	// const [isMobile] = useMediaQuery('(max-width: 1000px)');
	return (
		<html lang="en">
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<Providers>
							{/* {isMobile ? <Navbar /> : <Sidebar />} */}
							<Navbar />

							{children}
							<Footer />
						</Providers>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
