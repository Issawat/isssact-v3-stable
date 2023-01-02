import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import type { AppProps } from "next/app";

import { Inter } from "@next/font/google";
import Head from "next/head";
import { useState } from "react";
const interFont = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <>
      <Head>
        <title>iss...sact | ไอแซค</title>
        <meta
          name="description"
          content="เว็บบทความของโปรแกรมเมอร์บ้าๆบอๆคนหนึ่ง - Let's share something (ridiculous) to the world!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={interFont.className}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <Component {...pageProps} />
          </MantineProvider>
        </ColorSchemeProvider>
      </div>
    </>
  );
};

export default App;
