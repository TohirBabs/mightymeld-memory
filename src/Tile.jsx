export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-[82px] md:h-[100px] md:w-[100px] w-[82px] col-span-1  row-span-1 rounded-xl md:rounded-2xl bg-indigo-300 text-center cursor-pointer"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="flex items-center justify-center  text-white h-[82px] w-[82px] md:h-[100px] md:w-[100px]  col-span-1  row-span-1 rounded-xl md:rounded-2xl bg-indigo-500 text-center ">
          
          <div className="text-5xl md:text-6xl ">{Content}</div>
        </Front>
      );
    case "matched":
      return (
        <Matched className="flex items-center justify-center opacity-60 h-[82px] p-2 w-[82px] md:h-[100px] md:w-[100px]  text-white col-span-1  row-span-1 bg-pink-400 rounded-xl md:rounded-2xl text-center">
          <div className="text-5xl md:text-6xl">{Content}</div>
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return <div onClick={flip} className={className}></div>;
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
