import Head from 'next/head';
import Image from 'next/image';
import Logo from '../../public/logo.svg';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
    <Head>
      <title>Coming Soon | Cruise Booking</title>
      <meta name="description" content="Cruise Booking - Coming Soon" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
      <div className="relative">
        <div className="absolute inset-0 border border-gray-300 rounded-full m-2"></div>
        <div className="rounded-full bg-white p-2">
          <div className="rounded-full border border-gray-300 p-4">
            <Image src={Logo} alt="Cruise Booking Logo" width={350} height={350} className="rounded-full" />
          </div>
        </div>
      </div>
      <h1 className="mt-6 text-4xl font-bold">Coming Soon</h1>
      <p className="mt-4 text-xl">Our website is under construction. We&apos;ll be here soon.</p>
    </main>
    
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <p className="text-sm">© 2025 bluestonecruise. All rights reserved.</p>
    </footer>
  </div>
  );
}