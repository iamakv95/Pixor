import { Link } from "react-router";
import { amazonHero, brands, clients, slider } from "../assets";
import {
  ImageSlider,
  ServiceCard,
  VideoPlayer,
  WhatsOurPoints,
} from "../components";
import { coverImg, video } from "../assets";
import { useState } from "react";
import "swiper/css";
import {
  accordionData,
  clientsLogo,
  portfolioImageSliderLeft,
  portfolioImageSliderRight,
  servicesCardHome,
  whatsOutPointsNegative,
  whatsOutPointsPositive,
} from "../constants";
import AccordionItem from "../components/AccordianItem";
import { FaCheckCircle } from "react-icons/fa";
import VideoReview from "../components/VideoReview";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="bg-accent font-dmSans">
        <div className="container min-h-[700px] max-xl:min-h-auto max-lg:pb-10 flex flex-col items-center justify-center gap-5 pt-20">
          <h1 className="text-dark font-bold text-4xl leading-tight text-center max-w-[570px]">
            Want to <span className="text-red">sell</span> more on the
            <span className="text-5xl"> Amazon marketplace?</span>
          </h1>
          <p className="text-gray text-xl text-center max-w-[600px]">
            Get better product pages & storefronts by creative marketers who
            make your products stand out & SELL!
          </p>
          <div className="flex items-center gap-8 mt-6 max-md:flex-wrap max-md:justify-center">
            <Link className="bg-red border-red border-2 text-white text-lg leading-tight py-2.5 px-8 rounded-full">
              View our portfolio
            </Link>
            <Link className="bg-white border-dark border-2 text-dark text-lg leading-tight py-2.5 px-8 rounded-full">
              Let’s book a call
            </Link>
          </div>
          <img src={clients} alt="clients" className="mt-10" />
        </div>
      </section>
      <section className="bg-white font-dmSans pt-20 pb-4">
        <div className="container flex flex-col items-center justify-center gap-8">
          <h2 className="text-dark font-bold text-4xl text-center">
            Our <span className="text-red">Forte?</span>
          </h2>
          <p className="text-gray text-lg text-center max-w-[690px]">
            With extensive experience across diverse product categories
            including healthcare, FMCG, kitchen, fashion, beauty, nutrition,
            electronics etc...
          </p>
        </div>
        <VideoPlayer
          videoSrc={video}
          coverImage={coverImg}
          customCss="mt-10"
          iconSize="text-5xl"
        />
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
          <h2 className="text-dark font-bold text-4xl text-center">
            Our <span className="text-red">Services</span>
          </h2>
          <p className="text-gray text-lg text-center max-w-[690px]">
            With extensive experience across diverse product categories
            including healthcare, FMCG, kitchen, fashion, beauty, nutrition,
            electronics etc...
          </p>
        </div>
        <div className="container grid grid-cols-4 justify-between max-xl:grid-cols-2 max-md:justify-center gap-x-9 gap-y-12 mt-10">
          {servicesCardHome.map((item) => (
            <ServiceCard
              key={item.preTitle}
              imgSrc={item.imgSrc}
              preTitle={item.preTitle}
              highlightTitle={item.highlightTitle}
              postTitle={item.postTitle}
              description={item.description}
              linkHref={item.linkHref}
              linkTitle={item.linkTitle}
            />
          ))}
        </div>
      </section>
      <section className="bg-black font-dmSans mt-20 mb-4 flex flex-col gap-3 py-3">
        <ImageSlider
          imageList={portfolioImageSliderLeft}
          direction="left"
          Fast={35}
          Slow={60}
        />
        <ImageSlider
          imageList={portfolioImageSliderRight}
          direction="right"
          Fast={35}
          Slow={60}
        />
      </section>
      <section className="bg-red w-full relative font-dmSans">
        <div className="container flex h-[500px] max-md:h-auto items-stretch justify-between max-sm:flex-col">
          <div className="absolute -left-1 w-1/2 h-full max-sm:w-full max-sm:h-[350px] max-sm:left-0">
            <img
              src={amazonHero}
              alt="Amazon Hero"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 max-sm:w-full max-sm:h-[350px]"></div>
          <div className="w-1/2 flex flex-col justify-center relative pl-[15%] max-md:pl-0 max-md:py-12 max-sm:py-16 max-sm:w-full">
            <h2 className="text-4xl font-bold text-white mb-6">Why Us?</h2>
            <div className="block">
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openIndex === index}
                  onClick={() => toggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white font-dmSans pt-20 pb-4">
        <div className="container flex flex-col items-center justify-center gap-8">
          <h2 className="text-dark font-bold text-center text-4xl">
            Go from boring to <span className="text-red">Brilliance</span>
          </h2>
        </div>
        <div className="container flex justify-between gap-16 mt-8">
          <div className="flex flex-col gap-8">
            <img
              src={amazonHero}
              alt="amazon hero"
              className="w-full object-contain"
            />
            <div className="flex flex-col gap-2 items-center">
              {whatsOutPointsNegative.map((item) => (
                <WhatsOurPoints
                  key={item.listTitle}
                  listIcon={FaCheckCircle}
                  listTitle={item.listTitle}
                  iconColor="text-red"
                  titleColor="text-dark"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <img
              src={amazonHero}
              alt="amazon hero"
              className="w-full object-contain"
            />
            <div className="flex flex-col gap-2 items-center">
              {whatsOutPointsPositive.map((item) => (
                <WhatsOurPoints
                  key={item.listTitle}
                  listIcon={FaCheckCircle}
                  listTitle={item.listTitle}
                  iconColor="text-green"
                  titleColor="text-dark"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-red mt-20 py-20 font-dmSans">
        <div className="container flex flex-col items-center justify-center gap-8">
          <h2 className="text-white font-bold text-4xl text-center max-w-[550px] ">
            Want to SELL more on the Amazon marketplace?
          </h2>
          <p className="text-center text-lg text-white max-w-[590px]">
            Get better product pages & storefronts by creative marketers who
            make your products stand out & SELL!
          </p>
          <Link className="bg-white border-white border-2 text-dark text-lg leading-tight py-2.5 px-8 rounded-full">
            Request a Quote
          </Link>
        </div>
      </section>
      <section className="bg-white mt-20 font-dmSans">
        <div className="container flex flex-col items-center justify-center gap-8 ">
          <h2 className="text-dark font-bold text-4xl text-center">
            Our <span className="text-red">clients</span>
          </h2>
          <p className="text-center text-lg text-dark max-w-[590px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
            itaque.
          </p>
          <div className="w-full mt-10 grid grid-cols-8 max-xl:grid-cols-6 max-lg:grid-cols-5 max-md:grid-cols-4 gap-12 items-center justify-center">
            {clientsLogo.map((item) => (
              <img
                src={item.imgSrc}
                key={item.imgAlt}
                alt={item.imgAlt}
                className="object-contain max-w-[120px]"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white mt-20 font-dmSans">
        <div className="container flex flex-col items-center justify-center gap-8 ">
          <h2 className="text-dark font-bold text-4xl text-center">
            client <span className="text-red">Testimonials</span>
          </h2>
          <div className="w-full mt-2 grid grid-cols-3 max-md:grid-cols-1 gap-12 max-xl:gap-8 max-lg:gap-6 items-center justify-center">
            <VideoReview
              clientName="Client 1"
              clientPosition="Position 1"
              iconSize="text-2xl"
              customCss="mt-0"
              coverImage={coverImg}
              videoSrc={video}
            />
            <VideoReview
              clientName="Client 2"
              clientPosition="Position 2"
              iconSize="text-2xl"
              customCss="mt-0"
              coverImage={coverImg}
              videoSrc={video}
            />
            <VideoReview
              clientName="Client 3"
              clientPosition="Position 3"
              iconSize="text-2xl"
              customCss="mt-0"
              coverImage={coverImg}
              videoSrc={video}
            />
          </div>
        </div>
      </section>
      <section className="bg-white mt-20 font-dmSans">
        <div className="container flex flex-col items-center justify-center gap-8 ">
          <h2 className="text-dark font-bold text-4xl text-center">
            Our <span className="text-red">Team</span>
          </h2>
          <p className="text-center text-lg text-dark max-w-[590px]">
            With extensive experience across diverse product categories
            including healthcare, FMCG, kitchen, fashion, beauty, nutrition,
            electronics etc...
          </p>
        </div>
        <div className="mt-10 bg-accent py-20 flex flex-col justify-center items-center gap-6">
          <img src={brands} alt="team" className="w-[200px]" />
          <h3 className="text-dark font-bold text-5xl text-center">
            Still have question?
          </h3>
          <p className="text-lg text-dark text-center max-w-[550px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus
            perferendis quia, quidem labore alias.
          </p>
          <div className="w-[150px] h-2 bg-red rounded-tl-2xl rounded-tr-2xl"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
