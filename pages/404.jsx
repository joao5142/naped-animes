import Seo from "../src/components/seo";
import Error from "/src/components/container/Error";

export default function ErrorPage() {
  return (
    <>
      <Seo title="Naped - 404" />
      <Error />
    </>
  );
}
