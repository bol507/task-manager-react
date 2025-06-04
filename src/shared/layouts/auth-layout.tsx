import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <div className="h-screen w-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className='text-lg font-medium text-black'>Task Manager</h2>
        {children}
      </div>

      <div className='hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-50 bg-[url(https://images.unsplash.com/vector-1745253137657-9181ff84d77e?q=80&w=1611&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) bg-cover  bg-no-repeat bg-center overflow-hidden p-8'>

      </div>
    </div>
  );
};