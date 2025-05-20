import Loader from "./_component/Loader";

export default function loading() {
  return (
    <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm flex items-center justify-center">
      <Loader />
    </div>
  );
}
