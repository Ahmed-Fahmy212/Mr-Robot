import { AnimatePresence, motion } from "framer-motion";
const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0 ,y:-25}}
          animate={{ opacity: 1 ,y:0}}
          exit={{ opacity: 0 ,y:-25}}
          transition={{ duration: 0.3 }}
          className="md:hidden block fixed top-20 right-4 py-1 w-40 h-auto bg-c1 rounded-lg z-20"
        >
          <div className="text-xl font-semibold  text-white">
            <ul className="flex flex-col items-center gap-4  ">
              <li className="">
                <a href="#">
                  <span className="border-b-2 border-transparent duration-200 hover:border-white">
                    Home
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="border-b-2 border-transparent duration-200 hover:border-white">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="border-b-2 border-transparent duration-200 hover:border-white">
                    Service
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="border-b-2 border-transparent duration-200 hover:border-white">
                    Contact
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="border-b-2 border-transparent duration-200 hover:border-white">
                    Motion
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
