import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata={
    title:'PropertyPulse | Find The Perfect Rental',
    description:'Find your dream rental property',
    keywords:'rental, find rental, find properties,  '
}
export default function layout({children}) {
  return (
    <html lang='en'>
      <body>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
