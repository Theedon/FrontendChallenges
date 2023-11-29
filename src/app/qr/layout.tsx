import { ReactNode } from "react";

function QRLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-light-gray">
      {children}
    </div>
  );
}

export default QRLayout;
