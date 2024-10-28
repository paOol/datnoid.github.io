import Link from 'next/link';
import Image from 'next/image';

import Logo from './logo';
import MobileMenu from './mobile-menu';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-1 flex items-center space-x-2">
            <Logo />
            <Image
              src={'https://app.datnoid.com/datnoidlogo.svg'}
              alt="Datnoid"
              width={200}
              height={40}
            />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="https://docs.datnoid.com/"
                >
                  Docs
                </Link>
              </li>

              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="https://app.datnoid.com/"
                >
                  Launch App
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="https://blog.datnoid.com/"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
