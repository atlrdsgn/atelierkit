import React from 'react';
import { KitMode, KitContext } from './context';

import { themes } from '../kit.css';

export interface KitProviderProps {
  children: React.ReactNode;
  defaultTheme?: KitMode;
}

export const KitProvider = ({
  children,
}: // defaultTheme,
React.PropsWithChildren<KitProviderProps>) => {
  const [kitTheme, setTheme] = React.useState<KitMode>('light');

  const toggleTheme = () => {
    setTheme((prevValue) => (prevValue === 'light' ? 'dark' : 'light'));
  };

  const Mode = kitTheme === 'light' ? themes.dark : themes.light;

  return (
    <KitContext.Provider
      value={{
        theme: kitTheme,
        toggleTheme,
      }}>
      <div className={`${themes.base} ${Mode}`}>{children}</div>
    </KitContext.Provider>
  );
};
