-- CreateTable
CREATE TABLE "followers" (
    "user_id" INTEGER NOT NULL
);

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

-- CreateTable
CREATE TABLE "threads" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edited" BOOLEAN DEFAULT false,
    "description" TEXT,
    "comment_img" VARCHAR(270),
    "post_id" INTEGER,
    "user_id" INTEGER,

    CONSTRAINT "threads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "description" TEXT,
    "post_img" VARCHAR,
    "likes" INTEGER NOT NULL,
    "dislikes" INTEGER NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "followers_user_id_key" ON "followers"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_sc_number_key" ON "users"("sc_number");

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
