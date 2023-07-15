import { motion } from "framer-motion";

export default function Faq() {
  return (
    <div className="py-16 md:py-20">
      <div className="text-center mb-8">
        <motion.h2
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold dark:text-white">Frequently asked questions</motion.h2>
      </div>
      <div className="space-y-4">
        <motion.details
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 40, duration: 1 }}
          viewport={{ once: true }}
          className="group rounded-lg bg-gray-50 dark:bg-gray-900 p-6 [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-gray-100">
            <h2 className="font-medium">
              How do I create a new task?
            </h2>
            <span className="relative h-5 w-5 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Creating a task is simple. Just click on the "Add Task" button or use the designated input field. Type in the task name and any additional details, such as
          </p>
        </motion.details>
        <motion.details
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 30, duration: 1 }}
          viewport={{ once: true }}
          className="group rounded-lg bg-gray-50 dark:bg-gray-900 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-gray-100">
            <h2 className="font-medium">
              Can I organize my tasks into different categories?
            </h2>
            <span className="relative h-5 w-5 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Yes, absolutely! Our application allows you to create customized lists or projects to categorize your tasks. You can create lists for different areas of your life, such as work, personal, shopping, or any other category you prefer. This helps you keep your tasks organized and easily accessible.
          </p>
        </motion.details>
        <motion.details
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 20, duration: 1 }}
          viewport={{ once: true }}
          className="group rounded-lg bg-gray-50 dark:bg-gray-900 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-gray-100">
            <h2 className="font-medium">
              Is there a way to set reminders for tasks?
            </h2>
            <span className="relative h-5 w-5 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Yes, we are working on it. This feature will coming soon.
            Basically, our application provides a reminder feature to help you stay on track. When creating or editing a task, you can set a specific date and time for a reminder. You will receive notifications via email, push notifications on your mobile device, or in-app alerts, depending on your preferred settings.
          </p>
        </motion.details>
      </div>
    </div>
  )
}