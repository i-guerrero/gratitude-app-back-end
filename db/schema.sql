DROP DATABASE IF EXISTS gratitude_entries_dev;
CREATE DATABASE gratitude_entries_dev;

\c gratitude_entries_dev;

CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    date TEXT NOT NULL,
    person TEXT,
    place TEXT,
    thing TEXT,
    mood INT,
    is_favorite BOOLEAN,
    notes TEXT,
    photo_url TEXT DEFAULT 'https://unleashed.bancroftschool.org/wp-content/uploads/2020/04/grateful-v2_5d9516ea-d742-42ab-8143-f9cd1c593cca_2000x.jpg'
);