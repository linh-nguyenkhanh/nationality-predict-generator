import "./App.css";

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-hero bg-cover bg-no-repeat ">
      <div className="container max-w-xl text-center backdrop-sepia-0">
        <div>
          <h1 className="text-white font-bold lg:text-5xl md:text-3xl mx-5 sm:text-2xl ">
            NATIONALITY PREDICT GENERATOR
          </h1>

          <p className="text-white my-4 lg:text-xl md:text-lg sm:text-sm">
            Give a name to predict the nationality of a person
          </p>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Enter a name..."
          className="lg:text-2xl md:text-xl sm:text-sm text-left drop-shadow-lg border-8 rounded border-white  px-2 pr-6 w-[70%]"
        />
        <div>
          <button className="outline outline-offset-4 outline-white-500  lg:text-xl md:text-lg sm:text-md text-white py-3 px-5 border-4 rounded-full bg-sky-500 hover:bg-sky-700 hover:text-white my-4">
            Country?
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
