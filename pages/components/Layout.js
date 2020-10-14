import Head from 'next/head';
import Navbar from './Narbar';

const Layout = ({ children }) => (
	<>
		<Head>
			<title>Harrys Products</title>
			<meta charSet="utf-8" />
		</Head>
		<Navbar />
		{children}
	</>
);

export default Layout;
