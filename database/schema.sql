-- Drop the table if it already exists so you can easily reset
DROP TABLE IF EXISTS restaurant_tables;

-- Create the core MVP table
CREATE TABLE restaurant_tables (
    id SERIAL PRIMARY KEY,               
    table_name VARCHAR(10) UNIQUE NOT NULL, 
    capacity INTEGER NOT NULL,           
    is_occupied BOOLEAN DEFAULT FALSE,   
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);