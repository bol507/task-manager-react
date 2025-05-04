import { Fragment, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <Fragment>
      <div className="h-screen w-full">
        {children}
      </div>
    </Fragment>
  );
};