import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.hash === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-800 shadow mx-auto px-3">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-3 md:px-8 py-3">
        <div className="flex md:flex-1 py-3">
          <a href="/" className="-m-1.5 p-1.5 text-white text-xl font-bold">
          
          </a>
        </div>

        <PopoverGroup className="hidden md:flex md:gap-x-8 lg:gap-x-12 text-lg">
          {["home", "about", "services", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative leading-6 ${
                isActive(`#${item}`)
                  ? "text-primary scale-105 shadow-lg"
                  : "text-gray-100"
              } hover:text-primary transition-all duration-300`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {isActive(`#${item}`) && (
                <span className="absolute left-0 -bottom-2 h-1 rounded-full w-full bg-primary transition-all duration-500" />
              )}
            </a>
          ))}
        </PopoverGroup>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="">
            <i className="fas fa-bars text-2xl text-gray-100 "></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-[50%] overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 flex justify-end"
            >
              <span className=" text-gray-50 h-6 w-6 text-xl">✖</span>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 text-gray-100">
                {["home", "about", "services", "projects", "contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray700 hover:bg-gray50 text-center`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
