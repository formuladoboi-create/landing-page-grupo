import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import SolutionsSection from '../components/sections/SolutionsSection';
import WhatIsSection from '../components/sections/WhatIsSection';
import BreedsSection from '../components/sections/BreedsSection';
import FAQSection from '../components/sections/FAQSection';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <WhatIsSection />
            <BreedsSection />
            <SolutionsSection />
            <FAQSection />
            <Footer />
        </div>
    );
};

export default HomePage;
