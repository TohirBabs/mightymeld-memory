// export function Tile({ content: Content, flip, state }) {
//   switch (state) {
//     case "play":
//       return (
//         <div
//         style={{perspective:"1000px"}}
//         className="bg-transparent h-[82px] md:h-[100px] md:w-[100px] w-[82px]">
//           <div style={{
//                 transition: "transform 0.8s",
//                 transformStyle: "preserve-3d",
//                 transform: state === "flipped" && "rotateY(180deg)"

//           }} className="relative w-full h-full">
//         <Back
//         style={{  
//           position: "absolute",
//           webkitBackfaceVisibility: "hidden", 
//           backfaceVisibility: "hidden"}}
//           className="inline-block h-[82px] md:h-[100px] md:w-[100px] w-[82px] col-span-1  row-span-1 rounded-xl md:rounded-2xl bg-indigo-300 text-center cursor-pointer"
//           flip={flip}
//         />
//         <Front
        
//         style={{ 
//            position: "absolute",
//           webkitBackfaceVisibility: "hidden", 
//           backfaceVisibility: "hidden",
//           transform: "rotateY(180deg)"}}
//            className="flex items-center justify-center  text-white h-[82px] w-[82px] md:h-[100px] md:w-[100px]  col-span-1  row-span-1 rounded-xl md:rounded-2xl bg-indigo-500 text-center ">
          
//           <div className="text-5xl md:text-6xl ">{Content}</div>
//         </Front></div>
//         </div>
//       );
//     //   case "start":
//     //   return (
//     //     <Back
//     //       className="inline-block h-[82px] md:h-[100px] md:w-[100px] w-[82px] col-span-1  row-span-1 rounded-xl md:rounded-2xl bg-indigo-300 text-center cursor-pointer"
//     //       flip={flip}
//     //     />
//     //   );
//     // case "flipped":
//     //   return (
//     //     <Front className="flex items-center justify-center  text-white h-[82px] w-[82px] md:h-[100px] md:w-[100px]  col-span-1  row-span-1 rounded-xl md:rounded-2xl bg-indigo-500 text-center ">
          
//     //       <div className="text-5xl md:text-6xl ">{Content}</div>
//     //     </Front>
//     //   );
//     case "matched":
//       return (
//         <Matched className="flex items-center justify-center opacity-60 h-[82px] p-2 w-[82px] md:h-[100px] md:w-[100px]  text-white col-span-1  row-span-1 bg-pink-400 rounded-xl md:rounded-2xl text-center">
//           <div className="text-5xl md:text-6xl">{Content}</div>
//         </Matched>
//       );
//     default:
//       throw new Error("Invalid state " + state);
//   }
// }

// function Back({ className, flip }) {
//   return <div onClick={flip} className={className}></div>;
// }

// function Front({ className, children }) {
//   return <div className={className}>{children}</div>;
// }

// function Matched({ className, children }) {
//   return <div className={className}>{children}</div>;
// }

export function Tile({ content: Content, flip, state }) {
  return(
  state === "play" || "flipped" ?
      
        (<div
        style={{perspective:"1000px"}}
        className="bg-transparent h-[82px] md:h-[100px] col-span-1  row-span-1 md:w-[100px] w-[82px]">
          <div style={{
                transition: "transform 0.3s",
                transformStyle: "preserve-3d",
                transform: state === "flipped" && "rotateY(180deg)"

          }} className="relative w-full h-full">
        <div
        style={{  
          webkitBackfaceVisibility: "hidden", 
          backfaceVisibility: "hidden"}}
          className=" w-full h-full absolute rounded-xl md:rounded-2xl bg-indigo-300 text-center cursor-pointer"
          onClick={flip}
        ></div>
        <div
        style={{ 
          webkitBackfaceVisibility: "hidden", 
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)"}}
           className="flex items-center absolute top-0 justify-center  text-white w-full h-full  rounded-xl md:rounded-2xl bg-indigo-500 text-center ">
          
          <div className="text-5xl md:text-6xl ">{Content}</div>
        </div></div>
        </div>)
      
    : state === "matched" ?
      
        (<Matched className="flex items-center justify-center opacity-60 h-[82px] p-2 w-[82px] md:h-[100px] md:w-[100px]  text-white col-span-1  row-span-1 bg-pink-400 rounded-xl md:rounded-2xl text-center">
          <div className="text-5xl md:text-6xl">{Content}</div>
        </Matched>)
      : <></>)
      // throw new Error("Invalid state " + state);
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
