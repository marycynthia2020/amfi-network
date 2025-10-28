import { BsArrowUpRight } from "react-icons/bs";

interface BtnProps {
  children:string,
  href: string
}

const Button = ({children, href}:BtnProps) => {
  return (
    <a 
    href={href}
    className=" w-full md:w-fit  font-medium capitalize flex items-center justify-between gap-3 pr-3 border border-deep-blue rounded-[100px] overflow-hidden">
      <span className="flex-1 text-center text-white bg-deep-blue py-5 px-12 rounded-tr-[150px] rounded-tl-[100px] rounded-bl-[100px] whitespace-nowrap">
        {children}
      </span>
      <BsArrowUpRight className="text-xl shrink-0 text-deep-blue" />
    </a>
  );
};

export default Button;
