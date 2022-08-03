INSERT INTO orders (userid, payment_type, delivery_fee, total, delivery_type, street, city, country, postcode) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id;

