import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

async function main() {
  const newProduct = await prisma.product.create({
    data: {
      name: "Lapto",
      price: 100.22,
      stock: true,
    },
  });

  console.log(newProduct);
}

main();
