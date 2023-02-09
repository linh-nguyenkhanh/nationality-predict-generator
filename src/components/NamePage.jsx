import { useGlobalContext } from "../context";

export const NamePage = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <section className="p-5">
        <h4>Loading ...</h4>
      </section>
    );
  }

  return <div></div>;
};
