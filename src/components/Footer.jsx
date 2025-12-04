import { SiCssdesignawards } from "react-icons/si";

function Footer() {
  return (
    <div className="px-4 py-6 border-t border-t-accent">
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row">
        <div className="w-full space-y-10 pr-0 lg:pr-32">
          <div className="flex items-center gap-2">
            <span className="text-4xl">
              <SiCssdesignawards />
            </span>
            <span className="font-bold text-xl">Interfaces DS</span>
          </div>
          <p className="text-brand text-sm">
            Subscribe to our newsletter for the latest updates on features and
            releases.
          </p>
          <hr className="text-accent h-px w-full" />
          <form className="w-full text-brand space-y-2">
            <div className="flex gap-4 w-full">
              <input
                className="bg-inherit px-2 border w-full py-3 rounded-md border-accent text-sm"
                placeholder="Your Email Address"
                type="text"
              />
              <button className="text-black animate-pulse hover:animate-none hover:cursor-pointer bg-white rounded-md py-3 px-4 font-medium hover:bg-blue-50 text-sm">
                Subscribe
              </button>
            </div>
            <p className="text-sm">
              By subscribing, you consent to our Privacy Policy and agree to
              receive updates.
            </p>
          </form>
        </div>
        <div className="font-medium grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-3 lg:gap-24 w-full lg:pl-36">
          <div className="flex flex-col gap-8 justify-start">
            <header className="text-brand ">Quick Link</header>
            <p>Home</p>
            <p>Pricings</p>
          </div>
          <div className="flex flex-col gap-8 justify-start">
            <header className="text-brand ">Support</header>
            <p>Contact</p>
          </div>
          <div className="flex flex-col gap-8 justify-start w-full">
            <header className="text-brand ">Social Media</header>
            <p> [@jshguo]</p>
          </div>
        </div>
      </div>
      <div className="pt-10 space-y-4">
        <hr className="text-accent" />
        <p className="text-sm">
          © 2025 Interfaces Design System. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
