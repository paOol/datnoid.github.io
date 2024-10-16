import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'What makes Datnoid more profitable than traditional DEXes?',
    answer:
      'The secret sauce is our double revenue model. If someone uses AVAX to buy a token on our DEX, the result is that more avax is added into our pool, meaning that the market price of AVAX is now lower on our DEX than other platforms. If AVAX is $50 everywhere, but now $45 on Datnoid, someone is guaranteed to come in and buy the avax and sell it elsewhere until the market price is back to normal. This generates us free guaranteed volume which no other DEX can provide. More swaps means higher returns for Liquidity providers. In addition to double revenue, LPs earn for every swap of every asset in our pool.',
    value: 'item-1',
  },
  {
    question: 'Where does the liquidity come from?',
    answer:
      'We have a unified liquidity pool, we seed the initial liquidity ourselves and it only grows over time from other LPs staking assets',
    value: 'item-2',
  },
  {
    question:
      'What features make Datnoid stand out from pump and other clones?',
    answer:
      'Pump.fun is a bond curve contract and users buy into tokens to seed the liquidity where it is migrated to a 3rd party DEX if there is enough traction. Datnoid IS the DEX with a unified liquidity pool and has no bond curve contract exploits.',
    value: 'item-3',
  },
  {
    question: 'How does Datnoid prevent scams for token traders?',
    answer:
      ' 100% of the token supply is added into our unified liquidity pool when a token is created. This means no pre-allocation for anyone, not even ourselves. This means no one can dump a portion of the token supply on users. We also use an audited smart contract to generate the tokens so you can trust there are no exploits or vulnerabilities with the tokens created on Datnoid.',
    value: 'item-4',
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
