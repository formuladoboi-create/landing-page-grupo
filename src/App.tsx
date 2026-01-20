import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import SolutionsSection from './components/sections/SolutionsSection';
import PillarsSection from './components/sections/PillarsSection';

import WhatIsSection from './components/sections/WhatIsSection';
import FAQSection from './components/sections/FAQSection';

const App: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <WhatIsSection />
            <SolutionsSection />
            <PillarsSection />
            <FAQSection />
            <Footer />
        </div>
    );
};

export default App;
