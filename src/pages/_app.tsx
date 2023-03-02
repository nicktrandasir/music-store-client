import type { AppProps } from "next/app";
import { DataProvider } from "../../core/dataProvider";
import { InitialDataType } from "../../core/hooks/useInitialData";

export type PageProps = AppProps["pageProps"] & {
  initialData: InitialDataType;
};

type Props = AppProps & {
  Component: AppProps["Component"] & {
    getLayout?: (page: JSX.Element, pageProps: PageProps) => JSX.Element;
  };
  pageProps: PageProps;
};

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  return (
    <DataProvider value={pageProps.initialData}>{getLayout(<Component {...pageProps} />, pageProps)}</DataProvider>
  );
}
