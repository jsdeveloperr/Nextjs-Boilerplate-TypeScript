import { ReactNode } from 'react';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full flex justify-center">
    {props.meta}
    <div className="container">{props.children}</div>
  </div>
);

export { Main };
