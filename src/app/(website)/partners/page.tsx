import {OurGallery, PartnerForm, PartnerHero} from "@/components/templates";

export default function Partners() {
  return (
      <div className={'flex flex-col'}>
        <PartnerHero/>
        <OurGallery/>
        <PartnerForm/>
      </div>
  )
}
