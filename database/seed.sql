-- TableLogic MVP Dummy Data Seeding
-- Populates 10 standard tables with mixed capacities for UI mapping

INSERT INTO restaurant_tables (table_name, capacity, is_occupied) 
VALUES 
    ('T1', 2, false),
    ('T2', 2, false),
    ('T3', 2, false),
    ('T4', 4, false),
    ('T5', 4, true),  
    ('T6', 4, true),
    ('T7', 6, false),
    ('T8', 6, false),
    ('B1', 2, false), 
    ('B2', 2, false);