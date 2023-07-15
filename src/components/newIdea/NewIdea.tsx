import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NewIdea() {
  return (
    <motion.section
      initial={{ x: -200 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50, duration: 1 }}
      viewport={{ once: true }}
      className="bg-gray-50 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div className="lg:w-1/2">
          <div className="h-64 bg-cover lg:h-full" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")' }} />
        </div>
        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Build Your New <span className="text-blue-500">Idea</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            Got a brilliant idea? Let's turn it into reality together. Our team is ready to collaborate with you and bring your concept to life. Whether you're an entrepreneur, a startup, or an established business, we have the expertise and resources to transform your vision into a successful digital solution.
          </p>
          <div className="inline-flex w-full mt-6 sm:w-auto">
            <Link to="/" className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
}