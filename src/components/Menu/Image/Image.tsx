import "../../../styles/Image.css";
export default function Image() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <img
          className="   w-full h-full object-cover fixed top-0 left-0  z-[-1] animate-my-float "
          src="/assets/red.jpg"
          alt="Image"
        ></img>
      </div>
    </>
  );
}
