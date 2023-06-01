import {Socials} from "@/components/molecules";

const FooterBar = () => {
  return (
      <div className={'flex justify-between text-16 text-dm-secondary-white'}>
        <div className={'inline-flex gap-10'}>
          <p>Copyright © 2023 Dilov Ministry</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <Socials/>
        </div>
      </div>
  );
};

export default FooterBar;
