import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { AuthProvider } from '@/contexts';
import { Inter } from "next/font/google";
import UserProvider from '@/contexts/UserProvider';
import ToastProvider from '@/providers/ToastProvider';
import SessionContextProvider from '@/contexts/SessionProvider';
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="eng">
      <body className={inter.className}>
        <SessionContextProvider>
          <ToastProvider>
            <ReactQueryProvider>
              <AuthProvider>
                <UserProvider>
                  {children}
                </UserProvider>
              </AuthProvider>
            </ReactQueryProvider>
          </ToastProvider>
          </SessionContextProvider>
      </body>
    </html>
  );
}
