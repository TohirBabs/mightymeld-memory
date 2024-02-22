export function Tiler({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block col-span-1 row-span-1 rounded-lg h-20 w-20 bg-indigo-400 text-center"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-block col-span-1 row-span-1 rounded-lg p-2 h-20 w-20 bg-indigo-600 text-white">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-block col-span-1 row-span-1 p-2 rounded-lg h-20 w-20 text-indigo-300">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

// function Back({ className, flip }) {
//   return (
//     <div onClick={flip} className={className}>

//     </div>
//   );
// }

// function Front({ className, children }) {
//   return <div className={className}>{children}</div>;
// }

// function Matched({ className, children }) {
//   return <div className={className}>{children}</div>;
// }

export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-20 w-20 col-span-1  row-span-1 rounded-md bg-indigo-300 text-center"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-block p-2 text-white h-20 w-20 col-span-1  row-span-1 rounded-md bg-indigo-600 text-center">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-block h-20 w-20 col-span-1  row-span-1 rounded-md text-indigo-200 text-center">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          />
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
