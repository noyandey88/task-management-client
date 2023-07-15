import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: "7.5rem" }}>
      <motion.div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: '#E0E7FF',
          margin: '5px',
        }}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'mirror',
          delay: 0.2,
          // ease: 'easeInOut',
          type: "spring"
        }}
      />
      <motion.div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: '#1D4ED8',
          margin: '5px',
        }}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'mirror',
          delay: 0.4,
          // ease: 'easeInOut',
          type: "spring"
        }}
      />
      <motion.div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: '#E0E7FF',
          margin: '5px',
        }}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'mirror',
          delay: 0.6,
          // ease: 'easeInOut',
          type: "spring"
        }}
      />
      <motion.div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: '#1D4ED8',
          margin: '5px',
        }}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'mirror',
          delay: 0.8,
          // ease: 'easeInOut',
          type: "spring"
        }}
      />
    </div>
  );
};

export default Spinner;