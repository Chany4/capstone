import { pool} from '../config/config.js'

const fetchCarts = async (req, res) => {
  try {
    const strQry = `
      SELECT distinct c.userID, CONCAT(u.firstName, '',u.lastName ) AS fullName,
          group_concat(DISTINCT p.partName) 'Item',
          sum(p.price * c.stockQuantity)  'Total Price',
          sum(c.stockQuantity) 'Quantity'
      FROM carts c
      JOIN users u ON c.userID = u.userID
      JOIN items p ON c.mechanicalPartID = p.mechanicalPartID
      group by c.userID;
    `;
    const [results] = await pool.query(strQry);
    res.json({
      status: res.statusCode,
      results
    });
  } catch (e) {
    res.json({
      status: 404,
      msg: e.message
    });
  }
}
const fetchuserCart = async (req, res) => {
  try {
    const strQry = `
      SELECT c.userID, CONCAT(u.firstName, '', u.lastName) AS fullName,
          i.mechanicalPartID,
          i.mechanicalPartID 'item',
          i.price * c.stockQuantity  'Total Price',
          c.stockQuantity 'Quantity'
      FROM Carts c
      JOIN users u ON c.userID = u.userID
      JOIN items p ON c.mechanicalPartID = i.mechanicalPartID
      WHERE c.userID = ?;
    `;
    const [results] = await pool.query(strQry, [req.params.id]);
    res.json({
      status: res.statusCode,
      results
    });
  } catch (e) {
    res.json({
      status: 404,
      msg: e.message
    });
  }
}
const fetchadduserCart = async (req, res) => {
  try {
    const strQry = `
      INSERT INTO Carts
      (userID, itemID, quantity)
      VALUES (?, ?, ?);
    `;
    await pool.query(strQry, [req.params.id, req.body.itemID, req.body.quantity]);
    res.json({
      status: res.statusCode,
      msg: 'Added to cart'
    });
  } catch (e) {
    res.json({
      status: 404,
      msg: e.message
    });
  }
}
const fetchupdateUserCart = async (req, res) => {
  try {
    const strQry = `
      UPDATE Carts
      SET quantity = ?
      WHERE itemID = ? AND userID = ?;
    `;
    const [result] = await pool.query(strQry, [req.body.quantity, req.params.itemID, req.params.id]);
    if (result.affectedRows > 0) {
      res.json({
        status: res.statusCode,
        msg: 'The quantity has been updated. Aragato:grin:'
      });
    } else {
      res.json({
        status: 404,
        msg: 'Cart item not found'
      });
    }
  } catch (e) {
    res.json({
      status: 404,
      err: e.message
    });
  }
}
const deleteItem = async (req, res) => {
  try {
    const strQry = `
      DELETE FROM Carts
      WHERE itemID = ? AND userID = ?;
    `;
    const [result] = await pool.query(strQry, [req.params.itemID, req.params.id]);
    if (result.affectedRows > 0) {
      res.json({
        status: res.statusCode,
        msg: 'An item was removed'
      });
    } else {
      res.json({
        status: 404,
        msg: 'Item not found'
      });
    }
  } catch (e) {
    res.json({
      status: 404,
      err: e.message
    });
  }
}
const deleteCart = async (req, res) => {
  try {
    const strQry = `
      DELETE FROM Carts
      WHERE userID = ?;
    `;
    const [result] = await pool.query(strQry, [req.params.id]);
    if (result.affectedRows > 0) {
      res.json({
        status: res.statusCode,
        msg: 'A cart was removed'
      });
    } else {
      res.json({
        status: 404,
        msg: 'Cart not found'
      });
    }
  } catch (e) {
    res.json({
      status: 404,
      err: e.message
    });
  }
}
export { fetchCarts, fetchuserCart, fetchadduserCart, fetchupdateUserCart, deleteItem, deleteCart }


