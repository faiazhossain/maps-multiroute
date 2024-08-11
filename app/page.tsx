import MainMap from "@/components/MainMap/MainMap";
import StoreProvider from "./StoreProvider";

export default function Home() {
  // const { name } = config.countryName;
  return (
    <>
      <StoreProvider>
        <MainMap
        />
      </StoreProvider>
    </>
  );
}
