

export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-[88px] w-[88px] col-span-1  row-span-1 rounded-xl bg-indigo-300 text-center cursor-pointer"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="flex items-center justify-center  text-white h-[88px] w-[88px] col-span-1  row-span-1 rounded-xl bg-indigo-600 text-center ">
          {/* <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          /> */}
          <div className="text-5xl  ">
          {Content}
          </div>
        </Front>
      );
    case "matched":
      return (
        <Matched className="flex items-center justify-center h-[88px] p-2 w-[88px] text-white col-span-1  row-span-1 bg-pink-400 rounded-xl text-center">
          <div className="text-5xl">
          {Content}
          </div>
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
