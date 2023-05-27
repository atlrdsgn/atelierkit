'use client';

import React from 'react';
import { Canvas } from '@atlrdsgn/kit';

function HomePage({ children }: { children: React.ReactNode }) {
  return <Canvas>{children}</Canvas>;
}

export default HomePage;