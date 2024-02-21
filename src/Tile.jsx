export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block col-span-1 row-span-1 rounded-lg h-20 w-20 bg-blue-400 text-center"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-block col-span-1 row-span-1 rounded-lg h-20 w-20 bg-blue-600 text-white">
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
        <Matched className="inline-block col-span-1 row-span-1 rounded-lg h-20 w-20 text-blue-300">
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
  return (
    <div onClick={flip} className={className}>
      
    </div>
  );
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}







// export function Tile({ content: Content, flip, state }) {
//   switch (state) {
//     case "start":
//       return (
//         <Back
//           className="inline-block h-20 w-20 bg-blue-300 text-center"
//           flip={flip}
//         />
//       );
//     case "flipped":
//       return (
//         <Front className="inline-block h-8 w-8 bg-green-500">
//           <Content
//             style={{
//               display: "inline-block",
//               width: "100%",
//               height: "100%",
//               verticalAlign: "top",
//             }}
//           />
//         </Front>
//       );
//     case "matched":
//       return (
//         <Matched className="inline-block h-8 w-8 text-gray-300">
//           <Content
//             style={{
//               display: "inline-block",
//               width: "100%",
//               height: "100%",
//               verticalAlign: "top",
//             }}
//           />
//         </Matched>
//       );
//     default:
//       throw new Error("Invalid state " + state);
//   }
// }

// function Back({ className, flip }) {
//   return (
//     <div onClick={flip} className={className}>
//       ?
//     </div>
//   );
// }

// function Front({ className, children }) {
//   return <div className={className}>{children}</div>;
// }

// function Matched({ className, children }) {
//   return <div className={className}>{children}</div>;
// }