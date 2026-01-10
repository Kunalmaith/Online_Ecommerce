INSERT INTO users(name,email,role) VALUES('Admin','admin@example.com','ADMIN');
INSERT INTO users(name,email,role) VALUES('Seller One','seller1@example.com','SELLER');
INSERT INTO users(name,email,role) VALUES('Buyer One','buyer1@example.com','BUYER');

INSERT INTO products(name,description,price,inventory) VALUES('Example Product 1','A small sample product',19.99,50);
INSERT INTO products(name,description,price,inventory) VALUES('Example Product 2','Another sample product',49.50,20);

INSERT INTO orders(buyer_id,status,total,created_at) VALUES(3,'NEW',19.99,CURRENT_TIMESTAMP());
