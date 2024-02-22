export function StartScreen({ start }) {
  
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-8 w-[85vw] max-w-xl items-center justify-center bg-pink-100 text-pink-700 h-[400px] rounded-xl font-mono">
        <h1 className="text-3xl font-semibold capitalize">memory</h1>
        <p>flip over tiles looking for pairs</p>
        <button
          onClick={start}
          className="bg-gradient-to-t from-pink-600 to-pink-300 rounded-full w-40 text-white p-3"
        >
          Play
        </button>
      </div>
    </div>
  );
}
