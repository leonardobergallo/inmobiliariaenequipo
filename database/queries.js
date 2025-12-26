import pool from './config.js';

// ========== USUARIOS ==========
export const getUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

export const createUser = async (userData) => {
  const { name, email, password, phone, role = 'user' } = userData;
  const result = await pool.query(
    `INSERT INTO users (name, email, password, phone, role) 
     VALUES ($1, $2, $3, $4, $5) 
     RETURNING id, name, email, phone, role, created_at`,
    [name, email, password, phone, role]
  );
  return result.rows[0];
};

// ========== PROPIEDADES ==========
export const getProperties = async (filters = {}) => {
  let query = 'SELECT p.*, u.name as agent_name, u.email as agent_email FROM properties p LEFT JOIN users u ON p.agent_id = u.id WHERE 1=1';
  const params = [];
  let paramCount = 1;

  if (filters.city) {
    query += ` AND p.city ILIKE $${paramCount}`;
    params.push(`%${filters.city}%`);
    paramCount++;
  }

  if (filters.type) {
    query += ` AND p.type = $${paramCount}`;
    params.push(filters.type);
    paramCount++;
  }

  if (filters.minPrice) {
    query += ` AND p.price >= $${paramCount}`;
    params.push(filters.minPrice);
    paramCount++;
  }

  if (filters.maxPrice) {
    query += ` AND p.price <= $${paramCount}`;
    params.push(filters.maxPrice);
    paramCount++;
  }

  if (filters.bedrooms) {
    query += ` AND p.bedrooms >= $${paramCount}`;
    params.push(filters.bedrooms);
    paramCount++;
  }

  if (filters.status) {
    query += ` AND p.status = $${paramCount}`;
    params.push(filters.status);
    paramCount++;
  }

  query += ' ORDER BY p.created_at DESC';

  if (filters.limit) {
    query += ` LIMIT $${paramCount}`;
    params.push(filters.limit);
  }

  const result = await pool.query(query, params);
  return result.rows;
};

export const getPropertyById = async (id) => {
  const result = await pool.query(
    `SELECT p.*, u.name as agent_name, u.email as agent_email, u.phone as agent_phone 
     FROM properties p 
     LEFT JOIN users u ON p.agent_id = u.id 
     WHERE p.id = $1`,
    [id]
  );
  return result.rows[0];
};

export const getPropertyImages = async (propertyId) => {
  const result = await pool.query(
    'SELECT * FROM property_images WHERE property_id = $1 ORDER BY order_index, is_primary DESC',
    [propertyId]
  );
  return result.rows;
};

export const getPropertyAmenities = async (propertyId) => {
  const result = await pool.query(
    'SELECT amenity FROM property_amenities WHERE property_id = $1',
    [propertyId]
  );
  return result.rows.map(row => row.amenity);
};

export const createProperty = async (propertyData) => {
  const {
    title, description, type, price, address, city, state, zip_code,
    bedrooms, bathrooms, area, agent_id, latitude, longitude
  } = propertyData;

  const result = await pool.query(
    `INSERT INTO properties (title, description, type, price, address, city, state, zip_code, 
     bedrooms, bathrooms, area, agent_id, latitude, longitude)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
     RETURNING *`,
    [title, description, type, price, address, city, state, zip_code,
     bedrooms, bathrooms, area, agent_id, latitude, longitude]
  );
  return result.rows[0];
};

// ========== FAVORITOS ==========
export const getFavorites = async (userId) => {
  const result = await pool.query(
    `SELECT p.*, u.name as agent_name 
     FROM favorites f
     JOIN properties p ON f.property_id = p.id
     LEFT JOIN users u ON p.agent_id = u.id
     WHERE f.user_id = $1
     ORDER BY f.created_at DESC`,
    [userId]
  );
  return result.rows;
};

export const addFavorite = async (userId, propertyId) => {
  const result = await pool.query(
    `INSERT INTO favorites (user_id, property_id) 
     VALUES ($1, $2) 
     ON CONFLICT (user_id, property_id) DO NOTHING
     RETURNING *`,
    [userId, propertyId]
  );
  return result.rows[0];
};

export const removeFavorite = async (userId, propertyId) => {
  await pool.query(
    'DELETE FROM favorites WHERE user_id = $1 AND property_id = $2',
    [userId, propertyId]
  );
};

// ========== MENSAJES ==========
export const getMessages = async (userId, otherUserId = null) => {
  let query = `
    SELECT m.*, 
           s.name as sender_name, s.email as sender_email,
           r.name as receiver_name, r.email as receiver_email
    FROM messages m
    JOIN users s ON m.sender_id = s.id
    JOIN users r ON m.receiver_id = r.id
    WHERE m.sender_id = $1 OR m.receiver_id = $1
  `;
  const params = [userId];

  if (otherUserId) {
    query += ' AND (m.sender_id = $2 OR m.receiver_id = $2)';
    params.push(otherUserId);
  }

  query += ' ORDER BY m.created_at ASC';

  const result = await pool.query(query, params);
  return result.rows;
};

export const createMessage = async (senderId, receiverId, message, propertyId = null) => {
  const result = await pool.query(
    `INSERT INTO messages (sender_id, receiver_id, message, property_id)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [senderId, receiverId, message, propertyId]
  );
  return result.rows[0];
};

// ========== ALERTAS ==========
export const getAlerts = async (userId) => {
  const result = await pool.query(
    'SELECT * FROM property_alerts WHERE user_id = $1 ORDER BY created_at DESC',
    [userId]
  );
  return result.rows;
};

export const createAlert = async (alertData) => {
  const { user_id, name, type, min_price, max_price, bedrooms, bathrooms, city, state } = alertData;
  const result = await pool.query(
    `INSERT INTO property_alerts (user_id, name, type, min_price, max_price, bedrooms, bathrooms, city, state)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     RETURNING *`,
    [user_id, name, type, min_price, max_price, bedrooms, bathrooms, city, state]
  );
  return result.rows[0];
};

// ========== CONTACTOS ==========
export const createContact = async (contactData) => {
  const { name, email, phone, message, property_id, agent_id } = contactData;
  const result = await pool.query(
    `INSERT INTO contacts (name, email, phone, message, property_id, agent_id)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [name, email, phone, message, property_id, agent_id]
  );
  return result.rows[0];
};

