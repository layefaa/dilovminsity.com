import React from "react";

const NavAction = ({label, children, clickEvent}: {
  label: string,
  children: React.ReactNode,
  clickEvent?: () => void
}) => {
  return (
      <div className={'flex items-center gap-[.5rem] cursor-pointer '} onClick={clickEvent}>
        <p>{children}</p>
        <p className={'text-16'}>{label}</p>
      </div>
  );
};

export default NavAction;
