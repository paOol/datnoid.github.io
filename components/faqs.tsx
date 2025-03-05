export default function Faqs() {
  return (
    <section className="relative">
      {/* Blurred shape */}
      <div
        className="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient
              id="bs3-a"
              x1="19.609%"
              x2="50%"
              y1="14.544%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#bs3-a)"
            fillRule="evenodd"
            d="m410 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 -410 427)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                Getting started with Datnoid
              </div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Everything you need to know
            </h2>
          </div>

          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}

              <div className="space-y-2">
                <h4 className="font-semibold">
                  What is the benefit of Datnoid's unified liquidity pool?
                </h4>
                <p className="text-slate-400">
                  Our unified liquidity pool enables seamless swaps between
                  multiple tokens, reducing fees and slippage. This efficient
                  design not only supports immediate trading but also rewards
                  liquidity providers with higher APRs from every swap across
                  the ecosystem.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">
                  What makes Datnoid more profitable than traditional DEXes?
                </h4>
                <p className="text-slate-400">
                  If someone uses AVAX to buy a token on our DEX, the result is
                  that more avax is added into our pool, meaning that the market
                  price of AVAX is now lower on our DEX than other platforms. If
                  AVAX is $50 everywhere, but now $45 on Datnoid, someone is
                  guaranteed to come in and buy the avax and sell it elsewhere
                  until the market price is back to normal. This generates us
                  free guaranteed volume which no other DEX can provide. More
                  swaps means higher returns for Liquidity providers. In
                  addition to double revenue, LPs earn for every swap of every
                  asset in our pool.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="font-semibold">
                  Where does the liquidity come from?
                </h4>
                <p className="text-slate-400">
                  We have a unified liquidity pool, we seed the initial
                  liquidity ourselves and it only grows over time from other LPs
                  staking assets
                </p>
              </div>
            </div>

            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="font-semibold">
                  How does Datnoid prevent scams for token traders?
                </h4>
                <p className="text-slate-400">
                  100% of the token supply is added into our unified liquidity
                  pool when a token is created. This means no pre-allocation for
                  anyone, not even ourselves. This means no one can dump a
                  portion of the token supply on users. We also use an audited
                  smart contract to generate the tokens so you can trust there
                  are no exploits or vulnerabilities with the tokens created on
                  Datnoid.'
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="font-semibold">
                  What makes Datnoid different from other meme coin platforms?
                </h4>
                <p className="text-slate-400">
                  Datnoid prevents rug pulls and bot abuse through transparent
                  launches and fair distribution. The scheduled launch system
                  eliminates stealth drops that benefit insiders. Our unified
                  liquidity pool enables seamless trading with fewer swaps and
                  lower costs. Tokens don't start at near-zero prices like on
                  other platforms, and there's no fragmented liquidity. This
                  creates a superior trading environment for both creators and
                  buyers, with transparent price discovery from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
