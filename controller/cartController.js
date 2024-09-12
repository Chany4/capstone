
// ADD TO CART INFO
const addToCart = async (req, res) => {
    console.log(req.body);
    let {id} = await getUserDB(req.body.user)
    console.log(id);
    
    await addToCartDB(req.body.id, user_id,quantity)
    res.json({message: "Item successfully added to cart"})
    console.log('added to cart');
    
}

const deleteFromCart = async (req, res) => {
    console.log(req.body);
    let {id} = await getUserDB(req.body.user)
    console.log(id);
    
    await addToCartDB(req.body.id, user_id,quantity)
    res.json({message: "Item successfully deleted from cart"})
    console.log('deleted from cart');
    
}

const getUserCart = async (req, res) => {
    try {
        const emailAdd = req.Email;
        const userID = await getUserID(emailAdd);
        const userCart = await getUserCart(userID);
        res.send(userCart);
    } catch (error) {
        console.error("Error fetching user cart:", error);
        res.status(404).send({msg:"There are no Items in cart"});
    }
}

export {addToCart,deleteFromCart,getUserCart}