import {Navbar} from "@/components/organisms";
import dynamic from "next/dynamic";
import {CeraPro} from "@/fonts";
import {Donate} from "@/components/atoms";

const NavigationBox = dynamic(() => import('@/components/organisms/NavigationBox'), {
  ssr: false
});
const Header = () => {
  return (
      <header className={`relative w-full ${CeraPro.className}`}>
        <Navbar/>
        <Donate/>
        <NavigationBox/>
      </header>
  );
};

export default Header;
