import React from 'react';
import HomePage from '@/components/core/home';
import { MainNav } from '@/components/main-nav';

export default function IndexPage() {
  return (
    <>
      <MainNav />
      <HomePage>
        <h1>Atelier® Kit Documentation</h1>
      </HomePage>
    </>
  );
}
