import {Navbar} from "@/components/organisms";
import dynamic from "next/dynamic";
import {CeraPro} from "@/fonts";

const NavigationBox = dynamic(() => import('@/components/organisms/NavigationBox'), {
  ssr: false
});
const Header = () => {
  return (
      <header className={`relative w-full ${CeraPro.className}`}>
        <Navbar/>
        <NavigationBox/>
      </header>
  );
};

export default Header;
