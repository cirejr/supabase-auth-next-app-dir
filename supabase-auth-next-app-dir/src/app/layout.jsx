import { AuthProvider } from 'src/components/AuthProvider';

import 'src/styles/globals.css';

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ... */}
        <AuthProvider>{children}</AuthProvider>
        {/* ... */}
      </body>
    </html>
  );
}