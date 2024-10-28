import Image from 'next/image';
import Team from '@/public/images/team.jpg';

export default function Story() {
  return (
    <section className="relative">
      {/* Blurred shape */}
      <div
        className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient
              id="bs4-a"
              x1="19.609%"
              x2="50%"
              y1="14.544%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#A855F7"></stop>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#bs4-a)"
            fillRule="evenodd"
            d="m0 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 0 427)"
          ></path>
        </svg>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
                Our story (so far)
              </h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                {/* <Image className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src={Team} width={420} height={280} alt="Team" /> */}
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                    web3 is too fragmented. Liquidity shouldn't be divided into
                    countless trading pairs, and alpha shouldn't be spread
                    across all the social media platforms. We're building a
                    product that helps everyone thrive in this market, from
                    liquidity providers to token creators to traders.
                  </p>
                  <p>
                    The elite have too much of an advantage in knowledge over
                    newcomers. Lets even the playing field by providing the
                    tools and information you need. We want to build tooling
                    into the platform to democratize the trading experience
                    whether you're an advanced trader or new to crypto.
                  </p>
                  <p>
                    Value extraction is a problem deeply ingrained in web3 and
                    will prevent the space from growing. Our Fair Launch System
                    prevent bots from stealing value from users, and all our
                    contracts are vetted so there's no potential for shady
                    contracts on our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
