export default function Card({
  title,
  description,
  price,
  category,
  image,
}: {
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(price);

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className="h-40" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <span className="badge badge-xs badge-warning">{category}</span>
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-5">{description}</p>
        <div className="card-actions justify-between items-baseline">
          <span className="text-xl">{formattedPrice}</span>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
