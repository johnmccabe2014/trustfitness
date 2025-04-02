import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0D424A] text-white py-8 text-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-sm text-white/70">© {new Date().getFullYear()} Trust Fitness. All rights reserved.</p>

        <a
          href="https://instagram.com/trustfitness.ie"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram className="text-2xl" />
          <span className="font-medium">Follow us on Instagram</span>
        </a>
      </div>
    </footer>
  );
}