import React from 'react';

import { Meta } from '@/layout/Meta';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="antialiased w-full flex justify-center">
        <Meta
          title="Abdul"
          description="Kredi hesaplama, banka karşılaştırma ve kart başvuru işlemlerini hızlıca yap; kasko ve sigorta tekliflerini hangikredi.com ile hemen gör!."
        />
        <nav className="container">
          <ul className="flex justify-between py-2 bg-orange-400">
            <li>İhtiyaç Kredisi</li>
            <li>Taşıt Kredisi</li>
            <li>Konut Kredisi</li>
            <li>Mevduat</li>
          </ul>
        </nav>
      </header>
      {children}
      <footer className="flex justify-center bg-orange-400 py-4">Footer</footer>
    </>
  );
};

export { DefaultLayout };
