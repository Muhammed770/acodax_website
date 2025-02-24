import { Header1 } from "@/components/navbar";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { MoveRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { Logos8 } from "@/components/trusted-by-logos";
import { Footerdemo } from "@/components/ui/footer-section";
import { FeatureSteps } from "@/components/blocks/feature-section";
const BLUR_FADE_DELAY = 0.04;


const features = [
  {
    step: 'Step 1',
    title: 'Streamline Your Operations',
    content: 'Enhance efficiency with Acodax ERP by automating core business processes, from finance to supply chain management.',
    image: 'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop'
  },
  {
    step: 'Step 2',
    title: 'Gain Real-Time Insights',
    content: 'Leverage powerful analytics and reporting tools to make data-driven decisions that propel your business forward.',
    image: 'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop'
  },
  {
    step: 'Step 3',
    title: 'Scale with Confidence',
    content: 'Optimize resource planning, improve collaboration, and scale seamlessly with Acodax ERP’s robust and flexible architecture.',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  },
]



export default function Home() {
  return (
    <>
      <section className="relative z-10 flex items-center justify-center h-[100dvh]">
        <Header1 />
        <div className="h-full w-full    dark:bg-dot-white/[0.3] bg-dot-black/[0.2] relative flex items-center justify-center">
          <div className="flex-col items-center justify-center px-2">
            <div className="text-center">
              {/* Radial gradient for the container to give a faded look */}
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              <BlurFade delay={BLUR_FADE_DELAY} >
                <p className="text-4xl tracking-tighter sm:text-7xl max-w-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                  Brace yourselves for the future of business intelligence
                </p>
              </BlurFade>
              {/* <div className="flex flex-col items-center justify-center">
            <BlurFadeText delay={BLUR_FADE_DELAY} className="text-2xl md:text-4xl lg:text-6xl" text="Brace yourselves for the future of" animateByCharacter={false} />
            <BlurFadeText delay={BLUR_FADE_DELAY} className="text-2xl md:text-4xl lg:text-6xl" text=" business intelligence" animateByCharacter={false} />
            </div> */}
              <div className="flex flex-col items-center justify-center m-4">
                <BlurFade delay={BLUR_FADE_DELAY * 3} >
                  <h3 className="text-md text-white/40 whitespace-pre-wrap ">
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
      </section>
      <section>
        <FeatureSteps
          features={features}
          title="Your Journey Starts Here"
          autoPlayInterval={4000}
          imageHeight="h-[500px]"
        />
      </section>

      <section>
        <Footerdemo />
      </section>
    </>
  );
}
