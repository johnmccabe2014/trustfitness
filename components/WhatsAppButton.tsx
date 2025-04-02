'use client';

interface FloatingWhatsAppButtonProps {
  message?: string;
  phone?: string;
}

export default function FloatingWhatsAppButton({
  message = "Hi, I'm interested in Trust Fitness!",
  phone = '+353831655529',
}: FloatingWhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="floating-whatsapp-button flex items-center gap-2 px-4 py-2 bg-white text-green-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <img
        src="/whatsappbutton.png"
        alt="WhatsApp"
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
      />
      <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
    </button>
  );
}