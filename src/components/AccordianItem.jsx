import { HiPlus, HiMinus } from "react-icons/hi";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-accent">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left text-xl font-medium text-white"
      >
        {title}
        {isOpen ? < HiMinus/> : <HiPlus />}
      </button>
      {isOpen && <div className="pb-4 text-accent text-base">{content}</div>}
    </div>
  );
};

export default AccordionItem;
