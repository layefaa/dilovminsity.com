'use client'
import {routes} from "@/constants";
import {NavLink} from "@/components/atoms";
import {m} from "framer-motion";
import {parentVariants} from "@/utils/motion";
import {useMenuContext} from "@/context/MenuContext";
import {CabinetGrotesk} from "@/fonts";

const Links = () => {
  const {toggleMenu} = useMenuContext()
  return (
      <m.div variants={parentVariants(.5)}
             className={`${CabinetGrotesk.className} flex flex-col items-center justify-between md:flex-row  h-full w-full`}>
        {routes.map((r, index) => (
            <NavLink key={index} name={r.name} route={r.route} clickEvent={() => {
              setTimeout(() => toggleMenu(), 400)
            }}/>
        ))}
      </m.div>
  );
};

export default Links;

