import { useNavigate } from "react-router-dom";

type CategoryCardProps = {
  image: string;
  backgroundImage: string;
  name: string;
};

export default function CategoryCard({
  image,
  backgroundImage,
  name,
}: CategoryCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/marketplace");
  };

  return (
    <div 
      className="flex flex-col rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer hover:scale-95 transition-transform duration-300"
      onClick={handleClick}
    >
      <div className="relative rounded-xl overflow-hidden bg-gray-800 aspect-square">
        <div className="relative h-full">
          <img
            src={backgroundImage}
            alt={name}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

          <div className="relative flex items-center justify-center h-full">
            <div className="flex items-center justify-center w-16 h-16">
              <img
                src={image}
                alt={name}
                className="w-16 h-16 object-contain drop-shadow"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/3 flex items-center justify-start p-4 bg-secondary text-white">
        <h3 className="text-white font-semibold text-sm">{name}</h3>
      </div>
    </div>
  );
}
