import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="p-4 bg-blue-600">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden">
        {items.map((item) => (
          <Panel
            key={item.id}
            open={open}
            setOpen={setOpen}
            id={item.id}
            Icon={item.Icon}
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-blue-50 transition-colors p-4 border-r-[1px] border-b-[1px] border-blue-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-semibold text-blue-600 rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-semibold text-blue-600">{title}</span>
        <div className="w-10 lg:w-full aspect-square bg-blue-600 text-white grid place-items-center rounded-full">
          <Icon size={24} />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-blue-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-blue-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end rounded-lg"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-6 py-4 bg-black/70 backdrop-blur-md text-white rounded-t-lg"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Barrier systems",
    Icon: FiDollarSign,
    imgSrc:
      "https://i.imgur.com/uZ2x2rY.jpeg",
    description:
      "Our state-of-the-art barrier systems ensure efficient and secure access control for car parks, providing a reliable solution for managing vehicle entry and exit.",
  },
  {
    id: 2,
    title: "Pay Stations",
    Icon: FiPlay,
    imgSrc:
      "https://i.imgur.com/nyS7Nmx.jpeg",
    description:
      "Pay stations serve as the primary interface between parking management and customers, offering seamless payment options and enhancing the overall parking experience.",
  },
  {
    id: 3,
    title: "Control Devices",
    Icon: FiBell,
    imgSrc:
      "https://i.imgur.com/5Vu0XgO.jpeg",
    description:
      "Stay organized and informed with our advanced tracking systems. Keep track of what's important.",
  },
  {
    id: 4,
    title: "Camera Systems",
    Icon: FiBarChart,
    imgSrc:
      "https://i.imgur.com/4Y4MP1L.jpeg",
    description:
      "Advanced camera systems enhance security and monitoring within parking areas, providing real-time surveillance and aiding in incident management",
  },
];
