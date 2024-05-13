-- CreateTable
CREATE TABLE "user_settings" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "currency" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "categories" (
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'income'
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'income',
    "category" TEXT NOT NULL,
    "categoryIcon" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "month_history" (
    "userId" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "income" REAL NOT NULL,
    "expense" REAL NOT NULL,

    PRIMARY KEY ("day", "month", "year", "userId")
);

-- CreateTable
CREATE TABLE "year_history" (
    "userId" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "income" REAL NOT NULL,
    "expense" REAL NOT NULL,

    PRIMARY KEY ("month", "year", "userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_userId_type_key" ON "categories"("name", "userId", "type");
