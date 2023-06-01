import {AboutChurch, Hero, OurCommunities, OurObjectives} from "@/components/templates";

export default function Home() {
  return (
      <div className={'flex flex-col gap-y-[7.5rem] md:gap-y-[15rem]'}>
        <Hero/>
        <AboutChurch/>
        <OurCommunities/>
        <OurObjectives/>
      </div>
  )
}
