import Card from "./Card";

interface AttractionCardProps {
  className?: string;
  attractionName: string;
  attractionLocation: string;
  attractionTime: string;
  artistOrBand?: string;
  other?: string;
}

export const AttractionCard = ({
  className = "",
  attractionName,
  attractionLocation,
  attractionTime,
  artistOrBand,
  other = "",
}: AttractionCardProps) => {
  return (
    <Card className="hover:shadow-none">
      <div className={`w-full h-full`}>
        <div
          className="w-full h-full before:inset-0 before:bg-black before:opacity-50 before:z-0"
          style={{
            backgroundImage: 'url("/pics/bg_pattern_1_c.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={`relative z-10 flex flex-col items-center justify-center w-full h-full p-4 text-white ${className}`}>
            <h2 className="text-3xl font-bold">{attractionName}</h2>
            <p className="mt-2">Location: {attractionLocation}</p>
            <p className="mt-2">Time: {attractionTime}</p>
            <p className="mt-2">{artistOrBand}</p>
            <p className="mt-2">{other}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
