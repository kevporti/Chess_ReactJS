export default function Tile({ position, image }) {
  return (
    <div>
      {image === undefined ? undefined : (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="piece h-20 w-20 hover:cursor-grab active:cursor-grabbing bg-center bg-contain bg-no-repeat"
        ></div>
      )}
    </div>
  );
}
