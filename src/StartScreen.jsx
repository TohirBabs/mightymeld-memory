export function StartScreen({ start }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col gap-4 w-screen max-w-5xl items-center relative justify-center  h-screen rounded-xl font-mono">
        <img src="logo2.svg" className="h-[80vh] md:hidden" />
        <img src="logo1.svg" className="h-[80vh] absolute  md:block hidden" />
        <button
          onClick={start}
          className="bg-gradient-to-t from-pink-600 font-bold to-pink-300 z-10 rounded-xl w-[90vw] max-w-sm text-lg md:text-xl text-black p-3"
        >
          New Game
        </button>
        <p className="text-white md:absolute bottom-5 right-5">
          developed by{" "}
          <a href="https://tohir-babs.vercel.app/" className="underline">
            panda🐼
          </a>
        </p>
      </div>
    </div>
  );
}
