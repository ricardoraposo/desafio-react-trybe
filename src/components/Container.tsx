import { PropsWithChildren } from 'react';

function Container({ children }: PropsWithChildren) {
  return (
    <div className="w-11/12  mx-auto flex flex-col items-center md:w-4/5">
      {children}
    </div>
  );
}

export default Container;
