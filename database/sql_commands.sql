CREATE TABLE "users"(
    "id" SERIAL,
    "username" VARCHAR(50) NOT NULL UNIQUE,
    "email" varchar(100) NOT NULL UNIQUE,
    "site_id" INTEGER NOT NULL,
    "bio" TEXT,
    "img_url" TEXT
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
CREATE TABLE "platforms"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "platforms" ADD PRIMARY KEY("id");
CREATE TABLE "games"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "steam_appid" INTEGER NOT NULL,
    "detailed_description" TEXT NOT NULL,
    "developers" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "publishers" TEXT NOT NULL,
    "header_image" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "required_age" INTEGER NOT NULL
);
ALTER TABLE
    "games" ADD PRIMARY KEY("id");
CREATE TABLE "category"(
    "id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "categories_id" INTEGER NOT NULL
);
ALTER TABLE
    "category" ADD PRIMARY KEY("id");
CREATE TABLE "comments"(
    "id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "body" TEXT NOT NULL,
    "game_id" INTEGER NOT NULL,
    "up_vote" INTEGER NOT NULL,
    "down_vote" INTEGER NOT NULL,
    "parent_comment_id" INTEGER NOT NULL,
    "title" TEXT NULL
);
ALTER TABLE
    "comments" ADD PRIMARY KEY("id");
CREATE TABLE "genre"(
    "id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "genre" ADD PRIMARY KEY("id");
CREATE TABLE "game_user"(
    "id" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "note" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "status" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "game_user" ADD PRIMARY KEY("id");
CREATE TABLE "game_platform"(
    "id" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL,
    "platform_id" INTEGER NOT NULL
);
ALTER TABLE
    "game_platform" ADD PRIMARY KEY("id");
CREATE TABLE "game_genre"(
    "id" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL
);
ALTER TABLE
    "game_genre" ADD PRIMARY KEY("id");
CREATE TABLE "game_category"(
    "id" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL
);
ALTER TABLE
    "game_category" ADD PRIMARY KEY("id");





ALTER TABLE
    "game_user" ADD CONSTRAINT "game_user_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "comments" ADD CONSTRAINT "comments_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "game_platform" ADD CONSTRAINT "game_platform_platform_id_foreign" FOREIGN KEY("platform_id") REFERENCES "platforms"("id");
ALTER TABLE
    "game_platform" ADD CONSTRAINT "game_platform_game_id_foreign" FOREIGN KEY("game_id") REFERENCES "games"("id");
ALTER TABLE
    "game_genre" ADD CONSTRAINT "game_genre_game_id_foreign" FOREIGN KEY("game_id") REFERENCES "games"("id");
ALTER TABLE
    "game_category" ADD CONSTRAINT "game_category_game_id_foreign" FOREIGN KEY("game_id") REFERENCES "games"("id");
ALTER TABLE
    "game_user" ADD CONSTRAINT "game_user_game_id_foreign" FOREIGN KEY("game_id") REFERENCES "games"("id");
ALTER TABLE
    "comments" ADD CONSTRAINT "comments_game_id_foreign" FOREIGN KEY("game_id") REFERENCES "games"("id");