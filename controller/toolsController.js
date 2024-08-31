import {getToolsDb,getToolDb,addToolDb,deleteToolDb,updateToolDb,addToCartDb}from '../model/toolsDb.js'

const getTools = async (req, res) => {
    res.json(await getToolsDb());
}

const getTool= async (req, res) => {
    res.json(await getToolDb(req.params.id));
    console.log(req.params.id);
}
productID, itemName, category, size, color, price, stockQuantity, warrantyPeriod, description

const addTool = async (req, res) => {
    let {itemName, category, size, color, price, stockQuantity, warrantyPeriod, description,imageURL} = req.body
    await addToolDb(itemName, category, size, color, price, stockQuantity, warrantyPeriod, description,imageURL)
    res.send('Data was successfully inserted')
}

const deleteTool = async (req, res) => {
    await deleteToolDb(req.params.id);
    res.send('Data was successfully removed')
}

const updateTool = async (req,res) => {
    let {productID, itemName, category, size, color, price, stockQuantity, warrantyPeriod, description,imageURL} = req.body
    let tools = await getUserDB(req.params.id)

    productID ? productID = productID : productID = tools.productID
    itemName ? itemName = itemName : itemName = tools.itemName
    category ? category = category : category = tools.category
    size ? size = size : size = tools.size
    color ? color = color : color = tools.color
    price ? price = price : price = tools.price
    stockQuantity ? stockQuantity = stockQuantity : stockQuantity = tools.stockQuantity
    warrantyPeriod ? warrantyPeriod = warrantyPeriod : warrantyPeriod = tools.warrantyPeriod
    description ? description = description : description = tools.description
    imageURL ? imageURL = imageURL : imageURL = tools.fav_imageURL

    await updateToolDb(partName, material, engineType, compatibleCarMake, imageURL, stockQuantity, warrantyPeriod, description, price, category)
    res.send('User info was successfully updated')
}




export{getTools,getTool,addTool,deleteTool,updateTool}