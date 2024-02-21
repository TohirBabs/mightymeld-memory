
export function StartScreen({ start }) {
    function Init(){
        <div>
          <button onClick={start} className="bg-gray-400 text-white p-3">
            Play
          </button>
        </div>
    }
    return (
      <div className="w-screen h-screen text-rose-700 font-mono flex justify-center items-center">
        <div className=" p-4 rounded-xl flex flex-col items-center justify-center gap-8 w-[90vw] max-w-xl h-[400px] bg-rose-100">
            <h1 className="text-3xl font-semibold">Memory</h1>
            <p>flip over tiles looking for pairs</p>
        <button onClick={start} className="bg-gray-400 text-white p-3 bg-gradient-to-t from-rose-600 to-rose-300 rounded-full w-40">
          Play
        </button>
        </div>
      </div>
    );
  }