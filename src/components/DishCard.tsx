interface DishCardProps {
  dish: {
    title: string;
    description: string;
    image: string;
  };
}
const DishCard = ({ dish }: DishCardProps) => {
  return (
    <div>
      <img src={dish.image} alt={dish.title} className="rounded-3xl p-2" />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">
          {dish.title}
        </h3>
        <p className="text-sm">{dish.description}</p>
      </div>
    </div>
  );
};

export default DishCard;
