import "./Test.css";

const Test = () => {
  return (
    <div className="w-[800px] h-[800px] border border-red-600 flex justify-center items-center">
        <div className="container border border-cyan-900">
          <div className="animated-box box1  bg-green-600"></div>
          {/* <div className="animated-box box2  bg-red-600"></div> */}
          {/* <div className="animated-box box3  bg-yellow-600"></div> */}
          {/* <div className="animated-box box4  bg-pink-600"></div> */}
        </div>
    </div>
  );
};

export default Test;
