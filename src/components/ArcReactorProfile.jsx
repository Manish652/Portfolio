import { motion } from "framer-motion";

const ArcReactorProfile = () => {
  return (
    <div className="relative z-20 flex items-center justify-center -mt-24 md:-mt-44">
      {/* Arc Reactor Container */}
      <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">

        {/* Outer Rotating Glow Rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-blue-500/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-cyan-400/70"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-4 rounded-full border border-blue-300/80"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        />

        {/* Energy Beams */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-8 sm:h-10 bg-gradient-to-t from-cyan-400 to-blue-600"
            initial={{ opacity: 0.5, scaleY: 0.5 }}
            animate={{
              scaleY: [0.5, 2, 0.5],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              repeat: Infinity,
              delay: i * 0.1 + 0.5,
              repeatDelay: 1,
            }}
            style={{
              left: '50%',
              top: '50%',
              transformOrigin: 'center bottom',
              transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
            }}
          />
        ))}

        {/* Glow Core */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-blue-600/20 blur-xl"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{
            scale: [0.8, 1.5, 0.8],
            opacity: [0.5, 1, 0.5],
            boxShadow: [
              '0 0 10px rgba(74, 222, 238, 0.5)',
              '0 0 20px rgba(74, 222, 238, 0.8)',
              '0 0 10px rgba(74, 222, 238, 0.5)',
            ],
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />

        {/* Profile Image */}
        <div className="relative w-full h-full flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md overflow-hidden shadow-xl border-2 border-cyan-400">
          <img
            src="/icon.jpg"
            alt="Manish Bhunia"
            className="w-20 h-20 sm:w-36 sm:h-36 md:w-34 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-2 border-white shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ArcReactorProfile;
