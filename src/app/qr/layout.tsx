import { ReactNode } from "react";

function QRLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-qrColors-light-gray flex h-[100vh] items-center justify-center">
      {children}
    </div>
  );
}

export default QRLayout;
