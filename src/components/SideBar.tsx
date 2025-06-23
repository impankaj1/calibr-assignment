import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  open: boolean;
  setIsOpen: (option: boolean) => void;
}

const Sidebar = ({ open, setIsOpen }: SidebarProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-16 right-0 bottom-0 left-0  h-[100vh] w-full bg-white shadow-lg z-50 p-4"
        >
          <div className="pt-10">
            <ul className="space-y-4 text-2xl py-2">
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li>Pages</li>
            </ul>

            <div className="w-full flex items-center justify-center mt-4">
              <Button
                size={"lg"}
                className="py-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started <ArrowRight />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
