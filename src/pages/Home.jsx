import { Link } from "react-router";
import {clients} from "../assets"
const Home = () => {
  return (
    <>
      <section className="bg-accent min-h-[90vh] font-dmSans">
        <div className="container flex flex-col items-center justify-center gap-8 pt-[21vh] ">
          <h1 className="text-dark font-bold text-4xl leading-tight text-center max-w-1/2">
            Want to <span className="text-red">SELL</span> more on the Amazon
            marketplace?
          </h1>
          <p className="text-gray text-xl text-center max-w-[60%]">
            Get better product pages & storefronts by creative marketers who
            make your products stand out & SELL!
          </p>
          <div className="flex items-center gap-8 mt-4">
            <Link className="bg-red border-red border-2 text-white text-lg leading-tight py-2.5 px-8 rounded-full">
              View our portfolio
            </Link>
            <Link className="bg-white border-dark border-2 text-dark text-lg leading-tight py-2.5 px-8 rounded-full">
              Let’s book a call
            </Link>
          </div>
          <img src={clients} alt="clients" />
        </div>
      </section>
    </>
  );
};

export default Home;
