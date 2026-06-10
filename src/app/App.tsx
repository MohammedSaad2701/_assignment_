import Group8 from "../imports/Group355-1";

export default function App() {
  return (
    <div className="page-wrapper">    
    <div className="min-h-screen w-full overflow-x-hidden overflow-y-auto bg-white">
      <div className="relative w-screen overflow-x-auto" style={{ height: "453vw" }}>
       <div
  className="absolute left-0 top-0 w-[1920px]"
  style={{
    transform: "scale(calc(85vw / 1920))",
    transformOrigin: "top left",
  }}
>
          <div className="w-fit">
            <Group8 />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
