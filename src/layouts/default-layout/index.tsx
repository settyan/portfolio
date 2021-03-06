import React from "react";

interface LayoutProps {
  readonly children: React.ReactNode
}

export const DefaultLayout = (props: LayoutProps): JSX.Element => {
  return <div>{props.children}</div>;
};

export const getLayout = (children) => (
  <DefaultLayout>{children}</DefaultLayout>
);

export default DefaultLayout;
