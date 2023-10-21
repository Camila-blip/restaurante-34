/*
  Warnings:

  - You are about to drop the column `cardapioId` on the `Produto` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_cardapioId_fkey";

-- DropIndex
DROP INDEX "Produto_cardapioId_key";

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "cardapioId";

-- CreateTable
CREATE TABLE "ProdutosDoPedido" (
    "id" SERIAL NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProdutosDoPedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CardapioToProduto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ProdutosDoPedido_produtoId_key" ON "ProdutosDoPedido"("produtoId");

-- CreateIndex
CREATE UNIQUE INDEX "_CardapioToProduto_AB_unique" ON "_CardapioToProduto"("A", "B");

-- CreateIndex
CREATE INDEX "_CardapioToProduto_B_index" ON "_CardapioToProduto"("B");

-- AddForeignKey
ALTER TABLE "ProdutosDoPedido" ADD CONSTRAINT "ProdutosDoPedido_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutosDoPedido" ADD CONSTRAINT "ProdutosDoPedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardapioToProduto" ADD CONSTRAINT "_CardapioToProduto_A_fkey" FOREIGN KEY ("A") REFERENCES "Cardapio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardapioToProduto" ADD CONSTRAINT "_CardapioToProduto_B_fkey" FOREIGN KEY ("B") REFERENCES "Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
