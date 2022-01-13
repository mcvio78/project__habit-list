import { useEffect, ReactNode, FC } from 'react';

interface DynamicWrapperProps {
  children: ReactNode;
  keyEvt: 'keydown' | 'keyup';
  callback: (event: KeyboardEvent) => void;
}

export const DynamicWrapper: FC<DynamicWrapperProps> = ({
  children,
  keyEvt,
  callback,
}) => {
  useEffect(() => {
    document.addEventListener(keyEvt, callback);

    return () => {
      document.removeEventListener(keyEvt, callback);
    };
  }, [children, keyEvt, callback]);

  return <>{children}</>;
};
