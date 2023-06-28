import {FAQs, VolunteerHero, Volunteering, VolunteeringOps} from "@/components/templates";

export default function About() {
  return (
      <div className={'flex flex-col'}>
        <VolunteerHero/>
        <Volunteering/>
        <VolunteeringOps/>
        <FAQs/>
      </div>
  )
}
