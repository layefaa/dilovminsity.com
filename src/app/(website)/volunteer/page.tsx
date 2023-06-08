import {VolunteerHero, Volunteering, VolunteeringOps} from "@/components/templates";

export default function About() {
  return (
      <div className={'flex flex-col gap-y-[7.5rem] md:gap-y-[15rem]'}>
        <VolunteerHero/>
        <Volunteering/>
        <VolunteeringOps/>
      </div>
  )
}
