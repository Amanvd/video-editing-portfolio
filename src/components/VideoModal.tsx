import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
}

interface VideoModalProps {
  project: Project;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop with blur */}
        <motion.div
          className="absolute inset-0 bg-noir-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal content */}
        <motion.div
          className="relative z-10 w-full max-w-4xl aspect-video"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Video container */}
          <div className="w-full h-full bg-noir-black rounded-lg overflow-hidden">
            <video
              src={project.videoUrl}
              controls
              autoPlay
              className="w-full h-full"
            />
          </div>

          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 text-muted-white hover:text-muted-white/70 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X size={28} />
          </motion.button>

          {/* Project info */}
          <motion.div
            className="absolute -bottom-16 left-0 right-0"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-muted-white/80 text-sm font-light">
              <span className="text-muted-white font-extra-bold">{project.title}</span>
              <br />
              {project.category}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
