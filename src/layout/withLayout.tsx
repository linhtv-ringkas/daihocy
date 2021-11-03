import React from 'react';
import DefaultLayout from "./defaultLayout";

const WithLayout = (WrapperComponent: React.FC, LayoutComponent?: React.FC): React.FC => {
  const wrapper = (props: any) => {
    const Layout = LayoutComponent ? LayoutComponent : DefaultLayout;
    return (
      <Layout>
        <WrapperComponent {...props} />
      </Layout>
    );
  };
  wrapper.displayName = `WithLayout`;
  return wrapper;
};

export default WithLayout;