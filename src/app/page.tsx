import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Header1 } from "@/components/navbar";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { MoveRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { Logos8 } from "@/components/trusted-by-logos";
import { TextAnimate } from "@/components/magicui/text-animate";


const BLUR_FADE_DELAY = 0.04;
export default function Home() {
  return (
    <div className="relative z-10 flex items-center justify-center h-screen">
      <Header1 />
      <div className="h-full w-full    dark:bg-dot-white/[0.3] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="flex-col items-center justify-center px-2">
          <div className="text-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <BlurFade delay={BLUR_FADE_DELAY} >
              <p className="text-4xl sm:text-7xl max-w-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Brace yourselves for the future of business intelligence
              </p>
            </BlurFade>

            {/* <div className="flex flex-col items-center justify-center">
            <BlurFadeText delay={BLUR_FADE_DELAY} className="text-2xl md:text-4xl lg:text-6xl" text="Brace yourselves for the future of" animateByCharacter={false} />
            <BlurFadeText delay={BLUR_FADE_DELAY} className="text-2xl md:text-4xl lg:text-6xl" text=" business intelligence" animateByCharacter={false} />
          </div> */}
            <div className="flex flex-col items-center justify-center m-4">
              <BlurFade delay={BLUR_FADE_DELAY * 3} >
                <h3 className="text-md text-white/40 whitespace-pre-wrap">
                  The all-in-one ERP solution designed for businesses that demand
                  <br />
                  efficiency and scalability.</h3>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 5} >
              <ShinyButton >
                <div className="flex flex-row items-center">
                  Get Started <MoveRight className="ml-2" size={16} />
                </div>
              </ShinyButton>
            </BlurFade>
          </div>
          {/* <Logos8 /> */}
        </div>
      </div>
    </div>
  );
}
