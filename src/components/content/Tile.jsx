export default function Tile({ position, image }) {
  return (
    <div>
      <img className="w-20" src={image} alt="" />
      {position}
    </div>
  );
}
