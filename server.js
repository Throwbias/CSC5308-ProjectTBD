require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the Neon PostgreSQL database 
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false 
  }
});

// ROUTE 1: GET ALL TABLES
app.get('/api/tables', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM restaurant_tables ORDER BY id ASC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching tables:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ROUTE 2: UPDATE TABLE STATUS 
app.patch('/api/tables/:id', async (req, res) => {
  const { id } = req.params;
  const { is_occupied } = req.body;

  try {
    const updateQuery = `
      UPDATE restaurant_tables 
      SET is_occupied = $1, last_updated = CURRENT_TIMESTAMP 
      WHERE id = $2 
      RETURNING *;
    `;
    const result = await pool.query(updateQuery, [is_occupied, id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Table not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error updating table:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`TableLogic API Server running on port ${PORT}`);
});