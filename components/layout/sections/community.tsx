import DiscordIcon from '@/components/icons/discord-icon';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <div>
                  Ready to join the
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    Datnoid Community?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Connect, share, and grow with like-minded enthusiasts. 🚀
            </CardContent>

            <CardFooter>
              <Button asChild style={{ margin: '0 0.2rem' }}>
                <a href="https://discord.gg/HNH6ZehFaY" target="_blank">
                  Discord
                </a>
              </Button>
              <Button asChild style={{ margin: '0 0.2rem' }}>
                <a href="https://twitter.com/Datnoid_Dapp" target="_blank">
                  Twitter
                </a>
              </Button>
              <Button asChild style={{ margin: '0 0.2rem' }}>
                <a href="https://t.me/weirdfrens" target="_blank">
                  Telegram
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
