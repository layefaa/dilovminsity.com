import {PartnerForm, PartnerHero} from "@/components/templates";

export default function Partners() {
  return (
      <div className={'flex flex-col gap-y-[7.5rem] md:gap-y-[15rem]'}>
        <PartnerHero/>
        <PartnerForm/>
      </div>
  )
}
