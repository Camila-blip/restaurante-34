/*
  Warnings:

  - You are about to drop the column `produto` on the `Cardapio` table. All the data in the column will be lost.
  - You are about to drop the column `cliente` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `produtos` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `statuspagamento` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `statuspedido` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `tipoacesso` on the `Usuario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[usuarioId]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuarioId]` on the table `Funcionario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clienteId]` on the table `Pedido` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[statusPagamentoId]` on the table `Pedido` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[statusPedidoId]` on the table `Pedido` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[produtoId]` on the table `Pedido` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cardapioId]` on the table `Produto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[categoriaProdutoId]` on the table `Produto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Cardapio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `CategoriaProduto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clienteId` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCliente` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `produtoId` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusPagamentoId` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusPedidoId` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardapioId` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoriaProdutoId` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `StatusPagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `StatusPedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TipoAcesso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoAcesso` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cardapio" DROP COLUMN "produto",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "CategoriaProduto" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Funcionario" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Pagamento" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "cliente",
DROP COLUMN "produtos",
DROP COLUMN "statuspagamento",
DROP COLUMN "statuspedido",
ADD COLUMN     "clienteId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nomeCliente" TEXT NOT NULL,
ADD COLUMN     "produtoId" INTEGER NOT NULL,
ADD COLUMN     "statusPagamentoId" INTEGER NOT NULL,
ADD COLUMN     "statusPedidoId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "cardapioId" INTEGER NOT NULL,
ADD COLUMN     "categoriaProdutoId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "StatusPagamento" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "StatusPedido" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "TipoAcesso" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "tipoacesso",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "tipoAcesso" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_usuarioId_key" ON "Cliente"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_usuarioId_key" ON "Funcionario"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_clienteId_key" ON "Pedido"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_statusPagamentoId_key" ON "Pedido"("statusPagamentoId");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_statusPedidoId_key" ON "Pedido"("statusPedidoId");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_produtoId_key" ON "Pedido"("produtoId");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_cardapioId_key" ON "Produto"("cardapioId");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_categoriaProdutoId_key" ON "Produto"("categoriaProdutoId");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcionario" ADD CONSTRAINT "Funcionario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_statusPagamentoId_fkey" FOREIGN KEY ("statusPagamentoId") REFERENCES "StatusPagamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_statusPedidoId_fkey" FOREIGN KEY ("statusPedidoId") REFERENCES "StatusPedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_cardapioId_fkey" FOREIGN KEY ("cardapioId") REFERENCES "Cardapio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_categoriaProdutoId_fkey" FOREIGN KEY ("categoriaProdutoId") REFERENCES "CategoriaProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
