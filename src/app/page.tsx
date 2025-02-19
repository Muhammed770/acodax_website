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
      <div className="flex-col items-center justify-center ">
        <div className="text-center">
          <DotPattern
            glow={true}
            opacity={0.7}
            className={cn(
              "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
            )}
          />
          <div className="flex flex-col items-center justify-center">
            <BlurFadeText delay={BLUR_FADE_DELAY} className="text-6xl " text="Brace yourselves for the future of" animateByCharacter={true} />
            <BlurFadeText delay={BLUR_FADE_DELAY} className="text-6xl " text=" business intelligence" animateByCharacter={true} />
          </div>
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
  );
}
