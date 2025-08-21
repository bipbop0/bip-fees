-- CreateTable
CREATE TABLE "Fee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "productId" TEXT,
    "shop" TEXT NOT NULL
);
