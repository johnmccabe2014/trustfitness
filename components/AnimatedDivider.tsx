'use client';

import { motion } from 'framer-motion';

interface AnimatedDividerProps {
  type?: 'wave' | 'line' | 'shimmer' | 'pulse' | 'dots';
  flip?: boolean;
}

export default function AnimatedDivider({ type = 'line', flip = false }: AnimatedDividerProps) {
  if (type === 'wave') {
    return (
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="-mt-1 overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 120"
          className={`w-full h-16 ${flip ? 'rotate-180' : ''} text-white`}
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64L60,74.7C120,85,240,107,360,117.3C480,128,600,128,720,117.3C840,107,960,85,1080,74.7C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </motion.div>
    );
  }

  if (type === 'shimmer') {
    return (
      <motion.div
        className="divider-shimmer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />
    );
  }

  if (type === 'pulse') {
    return (
      <motion.div
        className="w-full border-t border-dashed border-white/40 my-12"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    );
  }

  if (type === 'dots') {
    return (
      <div className="divider-dots">
        <motion.div
          className="absolute w-2 h-2 bg-white rounded-full top-[-4px]"
          animate={{ x: ['0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        />
      </div>
    );
  }

  // Default: simple expanding line
  return (
    <motion.div
      className="w-full flex justify-center my-12"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{ transformOrigin: 'center' }}
    >
      <div className="divider-line" />
    </motion.div>
  );
}
