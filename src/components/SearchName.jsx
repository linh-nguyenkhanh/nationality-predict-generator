import { useGlobalContext } from "../context";

export const SearchName = () => {
  const { loading, name } = useGlobalContext();

  if (loading) {
    return (
      <section className="p-5">
        <h4>Loading ...</h4>
      </section>
    );
  }

  if (name.length < 3) {
    return (
      <section>
        <h4>No country matched your search term. Please try again.</h4>
      </section>
    );
  }
};
