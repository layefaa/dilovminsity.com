import {Navbar} from "@/components/organisms";
import dynamic from "next/dynamic";

const NavigationBox = dynamic(() => import('@/components/organisms/NavigationBox'), {
  ssr: false
});
const Header = () => {
  return (
      <header className={`relative`}>
        <Navbar/>
        <NavigationBox/>
      </header>
  );
};

export default Header;
