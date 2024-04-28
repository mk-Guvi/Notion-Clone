import Header from '@/components/landing-page/header';
import React from 'react';

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='pb-4'>
      <Header />
      {children}
    </main>
  );
};

export default HomePageLayout;
