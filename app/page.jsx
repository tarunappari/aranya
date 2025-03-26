import HeroSection from '@/components/landingpage/HeroSection';
import Navbar from '@/components/common/Navbar';
import Category from '@/components/landingpage/Category';
import Mission from '@/components/landingpage/Mission';
import Favourites from '@/components/landingpage/Favourites';


import Testimonals from '@/components/landingpage/Testimonals';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Category />
      <Mission />
      <Favourites />
      <Testimonals />
      <Footer />
    </div>
  );
}
