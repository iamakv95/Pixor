import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const ServiceCard = ({
  imgSrc,
  preTitle,
  highlightTitle,
  postTitle,
  description,
  linkHref,
  linkTitle,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 rounded-2xl bg-accent shadow-md border-2 border-accent shadow-border pb-6">
      <img
        src={imgSrc}
        alt="hero"
        className="rounded-2xl mb-4 w-full min-h-[200px] object-cover"
      />
      <h4 className="text-xl px-4">
        {preTitle} <span className="text-red">{highlightTitle}</span>{" "}
        {postTitle}
      </h4>
      <p className="text-sm text-center text-gray px-4">{description}</p>
      <Link
        to={linkHref}
        className="text-red text-base flex items-center gap-1 mt-2"
      >
        <span>{linkTitle}</span>
        <MdArrowOutward className="opacity-70" />
      </Link>
    </div>
  );
};

export default ServiceCard;
