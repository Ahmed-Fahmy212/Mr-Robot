import Header from "./components/Navbar/Header";
import Hero from "./components/Hero/Hero";
const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
      {/* <div
      style={{
        background: 'linear-gradient(to right, rgba(3, 105, 161, .18) 50%, white 50%)',
        height: '80vh',
        width: '100%',
      }}
    > */}

        <Header style={{background: 'linear-gradient(to right, rgba(3, 105, 161, .18) 50%, white 50%)',height: '100%',
        width: '100%',}}/>
        <Hero />
    </div>
      {/* </div> */}
    </>
  );
};

export default App;
