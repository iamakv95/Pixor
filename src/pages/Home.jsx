import { Link } from "react-router";
import { amazonHero, clients, slider } from "../assets";
import { VideoPlayer } from "../components";
import { coverImg, video } from "../assets";
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  return (
    <>
      <section className="bg-accent font-dmSans">
        <div className="container min-h-[700px] max-xl:min-h-auto max-lg:pb-10 flex flex-col items-center justify-center gap-8 pt-20">
          <h1 className="text-dark font-bold text-4xl leading-tight text-center max-w-1/2 max-lg:max-w-full">
            Want to <span className="text-red">SELL</span> more on the Amazon
            marketplace?
          </h1>
          <p className="text-gray text-xl text-center max-w-[60%] max-lg:max-w-full">
            Get better product pages & storefronts by creative marketers who
            make your products stand out & SELL!
          </p>
          <div className="flex items-center gap-8 mt-4 max-md:flex-wrap max-md:justify-center">
            <Link className="bg-red border-red border-2 text-white text-lg leading-tight py-2.5 px-8 rounded-full">
              View our portfolio
            </Link>
            <Link className="bg-white border-dark border-2 text-dark text-lg leading-tight py-2.5 px-8 rounded-full">
              Let’s book a call
            </Link>
          </div>
          <img src={clients} alt="clients" className="mt-6" />
        </div>
      </section>
      <section className="bg-white font-dmSans pt-20 pb-4">
        <div className="container flex flex-col items-center justify-center gap-8">
          <h2 className="text-dark font-bold text-4xl">
            Our <span className="text-red">Forte?</span>
          </h2>
          <p className="text-gray text-xl text-center max-w-[65%]">
            With extensive experience across diverse product categories
            including healthcare, FMCG, kitchen, fashion, beauty, nutrition,
            electronics etc...
          </p>
        </div>
        <VideoPlayer videoSrc={video} coverImage={coverImg} customCss="mt-10" />
      </section>
      <section
        style={{ backgroundImage: `url(${coverImg})` }}
        className="bg-no-repeat bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black opacity-85 z-0 h-full w-full"></div>
        <div className="container grid grid-cols-4 justify-between max-xl:grid-cols-2 max-md:justify-center max-md:grid-cols-1 gap-8 max-md:gap-12 z-10 relative py-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <h4 className="text-2xl text-white">Client Satisfaction</h4>
            <p className="text-4xl font-semibold text-white">650+</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h4 className="text-2xl text-white">Client Satisfaction</h4>
            <p className="text-4xl font-semibold text-white">650+</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h4 className="text-2xl text-white">Client Satisfaction</h4>
            <p className="text-4xl font-semibold text-white">650+</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h4 className="text-2xl text-white">Client Satisfaction</h4>
            <p className="text-4xl font-semibold text-white">650+</p>
          </div>
        </div>
      </section>
      <section className="bg-white font-dmSans pt-20 pb-4">
        <div className="container flex flex-col items-center justify-center gap-8">
          <h2 className="text-dark font-bold text-4xl">
            Our <span className="text-red">Services</span>
          </h2>
          <p className="text-gray text-xl text-center max-w-[65%]">
            With extensive experience across diverse product categories
            including healthcare, FMCG, kitchen, fashion, beauty, nutrition,
            electronics etc...
          </p>
        </div>
        <div className="container grid grid-cols-4 justify-between max-xl:grid-cols-2 max-md:justify-center max-md:grid-cols-1 gap-x-9 gap-y-12 mt-10">
          <div className="flex flex-col justify-center items-center gap-2 rounded-2xl bg-accent shadow-md border-2 border-accent shadow-border pb-6">
            <img src={amazonHero} alt="hero" className="rounded-2xl mb-4 w-full min-h-[200px] object-cover" />
            <h4 className="text-xl px-4">
              Amazon <span className="text-red">Hero</span>
            </h4>
            <p className="text-sm text-center text-gray px-4">
              Connect with your buyers with visuals that bring clicks at first
              sight
            </p>
            <Link to="/" className="text-red text-base flex items-center gap-1 mt-2">
              <span>View our portfolio</span>
              <MdArrowOutward className="opacity-70" />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 rounded-2xl bg-accent shadow-md border-2 border-accent shadow-border pb-6">
            <img src={amazonHero} alt="hero" className="rounded-2xl mb-4" />
            <h4 className="text-xl font-medium px-4">
              Amazon <span className="text-red">Hero</span>
            </h4>
            <p className="text-sm text-center text-gray px-4">
              Connect with your buyers with visuals that bring clicks at first
              sight
            </p>
            <Link to="/" className="text-red text-base flex items-center gap-1 mt-2">
              <span>View our portfolio</span>
              <MdArrowOutward className="opacity-70" />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 rounded-2xl bg-accent shadow-md border-2 border-accent shadow-border pb-6">
            <img src={amazonHero} alt="hero" className="rounded-2xl mb-4" />
            <h4 className="text-xl font-medium px-4">
              Amazon <span className="text-red">Hero</span>
            </h4>
            <p className="text-sm text-center text-gray px-4">
              Connect with your buyers with visuals that bring clicks at first
              sight
            </p>
            <Link to="/" className="text-red text-base flex items-center gap-1 mt-2">
              <span>View our portfolio</span>
              <MdArrowOutward className="opacity-70" />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 rounded-2xl bg-accent shadow-md border-2 border-accent shadow-border pb-6">
            <img src={amazonHero} alt="hero" className="rounded-2xl mb-4" />
            <h4 className="text-xl font-medium px-4">
              Amazon <span className="text-red">Hero</span>
            </h4>
            <p className="text-sm text-center text-gray px-4">
              Connect with your buyers with visuals that bring clicks at first
              sight
            </p>
            <Link to="/" className="text-red text-base flex items-center gap-1 mt-2">
              <span>View our portfolio</span>
              <MdArrowOutward className="opacity-70" />
            </Link>
          </div>
           <div className="flex flex-col justify-center items-center gap-2 rounded-2xl bg-accent shadow-md border-2 border-accent shadow-border pb-6">
            <img src={amazonHero} alt="hero" className="rounded-2xl mb-4" />
            <h4 className="text-xl font-medium px-4">
              Amazon <span className="text-red">Hero</span>
            </h4>
            <p className="text-sm text-center text-gray px-4">
              Connect with your buyers with visuals that bring clicks at first
              sight
            </p>
            <Link to="/" className="text-red text-base flex items-center gap-1 mt-2">
              <span>View our portfolio</span>
              <MdArrowOutward className="opacity-70" />
            </Link>
          </div>
           <div className="flex flex-col justify-center items-center gap-2 rounded-2xl bg-accent shadow-md border-2 border-accent shadow-border pb-6">
            <img src={amazonHero} alt="hero" className="rounded-2xl mb-4" />
            <h4 className="text-xl font-medium px-4">
              Amazon <span className="text-red">Hero</span>
            </h4>
            <p className="text-sm text-center text-gray px-4">
              Connect with your buyers with visuals that bring clicks at first
              sight
            </p>
            <Link to="/" className="text-red text-base flex items-center gap-1 mt-2">
              <span>View our portfolio</span>
              <MdArrowOutward className="opacity-70" />
            </Link>
          </div>
           <div className="flex flex-col justify-center items-center gap-2 rounded-2xl bg-accent shadow-md border-2 border-accent shadow-border pb-6">
            <img src={amazonHero} alt="hero" className="rounded-2xl mb-4" />
            <h4 className="text-xl font-medium px-4">
              Amazon <span className="text-red">Hero</span>
            </h4>
            <p className="text-sm text-center text-gray px-4">
              Connect with your buyers with visuals that bring clicks at first
              sight
            </p>
            <Link to="/" className="text-red text-base flex items-center gap-1 mt-2">
              <span>View our portfolio</span>
              <MdArrowOutward className="opacity-70" />
            </Link>
          </div>
           <div className="flex flex-col justify-center items-center gap-2 rounded-2xl bg-accent shadow-sm border-2 border-accent shadow-border pb-6">
            <img src={amazonHero} alt="hero" className="rounded-2xl mb-4" />
            <h4 className="text-xl font-medium px-4">
              Amazon <span className="text-red">Hero</span>
            </h4>
            <p className="text-sm text-center text-gray px-4">
              Connect with your buyers with visuals that bring clicks at first
              sight
            </p>
            <Link to="/" className="text-red text-base flex items-center gap-1 mt-2">
              <span>View our portfolio</span>
              <MdArrowOutward className="opacity-70" />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-dark font-dmSans mt-20 mb-4 h-[90vh]">
        <img src={slider} alt="" className="w-full h-full object-cover"/>
      </section>
    </>
  );
};

export default Home;
