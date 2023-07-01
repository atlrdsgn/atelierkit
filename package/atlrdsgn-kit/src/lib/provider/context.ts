import { createContext, useContext } from 'react';

export type KitMode = 'light' | 'dark';

export type KitContextValue = {
  theme: KitMode;
  toggleTheme: any;
};

export const KitContext = createContext<KitContextValue>({
  theme: 'light',
  toggleTheme: null,
});

export const useTheme = (): KitContextValue => {
  const context = useContext(KitContext);
  if (!context)
    throw new Error('Atelier® Kit components must be used within [KitProvider]');
  return context;
};
