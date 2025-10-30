import { CiMail, CiPhone } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import Logo from "../components/ui/Logo";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Our Service", href: "#features" },
    { name: "About Us", href: "#about" },
  ];

  const usefulLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Condition", href: "#" },
    { name: "Newsletter", href: "#" },
  ];

  const socials = [
    { name: "Facebook", href: "", icon: SlSocialFacebook },
    { name: "Twitter", href: "", icon: FaXTwitter },
    { name: "Facebook", href: "", icon: FaInstagram },
    { name: "Facebook", href: "", icon: LuLinkedin },
  ];

  return (
    <footer
      className="py-20 bg-footer-bg text-white"
      id="contact">
      <div className="max-w-[1440px] px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo and Contact */}
          <div className="space-y-4 items-left">
            <Logo color="#ffffff" />
            <div className="space-y-2 text-lg opacity-50">
              <div className="flex items-center gap-2 hover:-translate-y-1 transition-transform">
                <CiMail className="w-4 h-4" />
                <a href="mailto:info@amfinetwork.com" className="">
                  info@amfinetwork.com
                </a>
              </div>
              <div className="flex items-center gap-2 hover:-translate-y-1 transition-transform">
                <CiPhone className="w-4 h-4" />
                <a href="tel:+90123456789" className="">
                  +91 123 456 789
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 ">Quick Links</h3>
            <ul className="space-y-2 text-lg opacity-50">
              {quickLinks.map((link) => (
                <li
                  key={link.name}
                  className="hover:-translate-y-1 transition-transform">
                  <a href={link.href} className="">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 ">Useful Links</h3>
            <ul className="space-y-2 text-lg opacity-50">
              {usefulLinks.map((link) => (
                <li
                  key={link.name}
                  className="hover:-translate-y-1 transition-transform">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <p className=" mb-4 text-lg opacity-50">
              Block E, Flat 1, Sky Memorial Complex, Herbert Macauley Way, Wuse
              Zone 5, FCT- Abuja, Nigeria.
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-full  flex items-center justify-center hover:-translate-y-1 transition-transform"
                  aria-label={social.name}>
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t opacity-50 pt-8">
          <p className="text-center text-xs uppercase tracking-wider">
            All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
