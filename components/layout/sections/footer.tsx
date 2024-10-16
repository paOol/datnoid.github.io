import { Separator } from '@/components/ui/separator';
import { ChevronsDownIcon } from 'lucide-react';
import Link from 'next/link';

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <img src="navlogo.svg" style={{ marginRight: '1rem' }} />

              <h3 className="text-2xl">Datnoid</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link
                href="https://docs.datnoid.com/"
                className="opacity-60 hover:opacity-100"
              >
                Docs
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link
                href="https://t.me/weirdfrens"
                className="opacity-60 hover:opacity-100"
              >
                Telegram
              </Link>
            </div>

            <div>
              <Link
                href="https://discord.gg/HNH6ZehFaY"
                className="opacity-60 hover:opacity-100"
              >
                Discord
              </Link>
            </div>

            <div>
              <Link
                href="https://twitter.com/Datnoid_Dapp"
                className="opacity-60 hover:opacity-100"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
