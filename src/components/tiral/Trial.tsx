import { motion } from "framer-motion";

export default function Trial() {
  return (
    <div className="container px-6 py-16 mx-auto text-center">
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Building Your Next App with our Awesome components</h1>
        <p className="mt-6 text-gray-500 dark:text-gray-300">With our extensive library of pre-built components, you can save valuable development time and leverage the latest design trends and functionalities.</p>
        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
          Start 14-Day free trial
        </button>
        <p className="mt-3 text-sm text-gray-400 ">No credit card required</p>
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", stiffness: 40, duration: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mt-10">
        <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="trial" />
      </motion.div>
    </div>
  );
}