import React from "react";

export default function Layout({ children }) {
  return (
    <html lang="tr">
      <body>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
