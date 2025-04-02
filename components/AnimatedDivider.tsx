interface AnimatedDividerProps {
  label?: string;
}

export default function AnimatedDivider({ label }: AnimatedDividerProps) {
  return (
    <div className="w-full flex items-center justify-center my-12 gap-4">
      <div className="relative flex-1 h-[2px] bg-white/20 overflow-hidden">
        <div className="absolute top-0 left-[-50%] w-[200%] h-full animate-slide bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      {label && (
        <span className="text-white text-sm md:text-base font-semibold tracking-wide whitespace-nowrap uppercase opacity-80">
          {label}
        </span>
      )}

      <div className="relative flex-1 h-[2px] bg-white/20 overflow-hidden">
        <div className="absolute top-0 left-[-50%] w-[200%] h-full animate-slide bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
    </div>
  );
}