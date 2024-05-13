import { ProductGrid, Title } from "@/components";
import { notFound } from "next/navigation";
import { initialData } from "../../../../seed/seed";
import { ValidGender } from "@/interfaces";

interface Props {
  params: {
    id: ValidGender;
  };
}

const seedProducts = initialData.products;
export default function ({ params }: Props) {
  const { id } = params;

  const labels: Record<ValidGender, string> = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Niños",
    unisex: "Unisex",
  };

  const products = seedProducts.filter((product) => product.gender === id);

  return (
    <>
      <Title
        title={`Tienda ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />
    </>
  );
}
