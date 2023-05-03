CREATE TABLE users (id SERIAL PRIMARY KEY, first_name VARCHAR(10) NOT NULL, last_name VARCHAR(10) NOT NULL, birth_date DATE NOT NULL, gender CHAR(2), home_address VARCHAR(100) NOT NULL, country_of_residence VARCHAR(30), phone BIGINT NOT NULL, pword VARCHAR(1000) NOT NULL, username VARCHAR(15) NOT NULL);

CREATE TABLE products (id SERIAL PRIMARY KEY, name VARCHAR(30) NOT NULL, price DECIMAL(10, 2) NOT NULL, gender CHAR(2), details VARCHAR(200), img_link VARCHAR(200));

CREATE TABLE initial_carts (product_id INTEGER REFERENCES products(id), product_price DECIMAL(10, 2) REFERENCES products(price), quantity INTEGER);

CREATE TABLE final_carts (id  SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id), total_price DECIMAL(10, 2) GENERATED ALWAYS AS SUM(initial_carts.product_price * initial_carts.quantity));

CREATE TABLE orders (order_id INTEGER REFERENCES final_carts(id), user_id INTEGER REFERENCES users(id), order_total  DECIMAL(10, 2), order_date DATE);

insert into products values ("Sideney", "Banker", "1990-04-18", "M", "28 Rosenberg Avenue Dumbass", "Switzerland", 24987428455, )
INSERT INTO products (name, price, gender, details, img_link) values ('WInter Boots', 55.34, 'FE', 'WOnderful winter booys to keep your feets warm and cozy', 'https://picsum.photos/200/300');
INSERT INTO products (name, price, gender, details, img_link) values ('Winter Jackets', 155.34, 'FE', 'Winter jackets to make that snow walk easy as in a hut tub', 'https://picsum.photos/230/330');

INSERT INTO products (name, price, gender, details, img_link) VALUES ('Winter Hat', 5.34, 'FE', 'Never forget to top it up with this perfect winter hats', 'https://picsum.photos/100/150');
