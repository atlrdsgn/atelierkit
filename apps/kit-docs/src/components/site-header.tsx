import { siteConfig } from 'config/site.config';
import { MainNav } from '@/components/main-nav';
import { ThemeToggle } from '@/components/theme-toggle';

export function SiteHeader() {
  return (
    <header className='relative top-0 z-40 w-full border-b bg-carbon-300'>
      <div className='container mx-auto flex h-12 max-w-screen-lg items-center space-x-4 sm:justify-between sm:space-x-0'>
        <MainNav items={siteConfig.mainNav} />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-1'>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
