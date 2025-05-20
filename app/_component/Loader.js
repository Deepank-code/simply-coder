export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="relative w-16 h-16 mb-4">
        {/* White base ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white animate-spin" />

        {/* Vibrant gradient spinner */}
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            backgroundImage:
              "conic-gradient(from 0deg, #fd1d1d, #fcb045, #ffdd00, #68e0cf, #bc2a8d, #fd1d1d)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent 72%, black 73%)",
            mask: "radial-gradient(farthest-side, transparent 72%, black 73%)",
          }}
        />
      </div>

      <p className="text-lg font-semibold text-gray-800 animate-pulse">
        Generating...
      </p>
    </div>
  );
}
