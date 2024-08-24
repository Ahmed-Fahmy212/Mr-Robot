import Header from "./components/Navbar/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        {/* <Button className="mt-10" href="#login">click me</Button> */}
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
