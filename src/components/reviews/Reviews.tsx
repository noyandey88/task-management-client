import { motion } from "framer-motion";

export default function Reviews() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 60, duration: 1 }}
        viewport={{ once: true }}
        className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our <span className="text-blue-500 ">clients</span> say
        </h1>
        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50, duration: 1 }}
            viewport={{ once: true }}
            className="p-8 border rounded-lg dark:border-gray-700">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              "Finally, an app that keeps me on top of my busy schedule! The reminders are a lifesaver, and the ability to sync with my existing calendars is a game-changer. Task Writer has become an essential tool in my daily routine."
            </p>
            <div className="flex items-center mt-8 -mx-2">
              <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                <span className="text-sm text-gray-500">CTO, Robert Consultency</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 40, duration: 1 }}
            viewport={{ once: true }}
            className="p-8 border rounded-lg dark:border-gray-700">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              "The personalized dashboards feature is fantastic! I can customize the app to fit my specific needs, and having quick access to my most important tasks and information saves me so much time. It's a game-changer."
            </p>
            <div className="flex items-center mt-8 -mx-2">
              <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">Jeny Doe</h1>
                <span className="text-sm text-gray-500">CEO, Jeny Consultency</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 30, duration: 1 }}
            viewport={{ once: true }}
            className="p-8 border rounded-lg dark:border-gray-700">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              "Not only is Task Writer highly functional, but it also boasts a beautiful design. The interface is clean, modern, and visually appealing. It's a pleasure to use every day."
            </p>
            <div className="flex items-center mt-8 -mx-2">
              <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                <span className="text-sm text-gray-500">Marketing Manager at Stech</span>
              </div>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </section>
  )
}