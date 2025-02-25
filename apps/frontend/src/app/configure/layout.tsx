import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { Children } from "react";

type layoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: layoutProps) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      {children}
    </MaxWidthWrapper>
  );
};

export default layout;
