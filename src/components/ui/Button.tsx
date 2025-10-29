interface BtnProps {
  children:string,
  href: string
}

const Button = ({children, href}:BtnProps) => {
  return (
    <a 
    href={href}
    className="w-full md:w-fit text-xl font-medium capitalize py-3 text-white  px-8  flex items-center justify-center bg-linear-to-r from-deep-blue to-orange rounded-lg">
        {children}
    </a>
  );
};

export default Button;
