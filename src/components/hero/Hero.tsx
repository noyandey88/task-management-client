import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to add <br /> your <span className="text-blue-500 ">Tasks</span></h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Categorize your tasks into different lists or projects to keep them neatly organized. Whether it's personal, work-related, or any other category, our application allows you to create customized lists to suit your needs.</p>
            <button onClick={() => navigate('/add-task')} className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500 font-bold">Add Task</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 1 }}
          className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg" />
        </motion.div>
      </div>
    </motion.section>
  )
}