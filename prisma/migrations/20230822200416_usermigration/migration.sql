-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "fullname" VARCHAR(127) NOT NULL,
    "username" VARCHAR(127) NOT NULL,
    "email" VARCHAR(127) NOT NULL,
    "user_img" VARCHAR(270) NOT NULL,
    "bg_img" VARCHAR(270) NOT NULL,
    "password" VARCHAR(60) NOT NULL,
    "sc_number" VARCHAR(11) NOT NULL,
    "telephone" VARCHAR(11) NOT NULL,
    "birthdate" VARCHAR(10) NOT NULL,
    "description" TEXT NOT NULL,
    "is_banned" BOOLEAN NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "is_moderator" BOOLEAN NOT NULL,
    "zip_code" VARCHAR(8) NOT NULL,
    "state" VARCHAR(127) NOT NULL,
    "city" VARCHAR(127) NOT NULL,
    "street" VARCHAR(127) NOT NULL,
    "number" VARCHAR(127) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_sc_number_key" ON "users"("sc_number");
