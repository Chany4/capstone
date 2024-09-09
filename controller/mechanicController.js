import {getMechanicsDb,getMechanicDb,addMechanicDb,deleteMechanicDb,updateMechanicDb} from '../model/mechanicDb.js'


const getMechanics = async (req, res) => {
    res.json(await getMechanicsDb());
}

const getMechanic= async (req, res) => {
    res.json(await getMechanicDb(req.params.id));
    console.log(req.params.id);

}

const addMechanic = async (req, res) => {
    let {partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description} = req.body
    await addMechanicDb(partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description)
    res.send('Data was successfully inserted')
}

const updateMechanic = async (req,res) => {
    let {partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description} = req.body
    let mechanics = await updateMechanicDb(req.params.id)

    partName ? partName = partName : partName = mechanics.partName
    material ? material = material : material = mechanics.material
    engineType ? engineType = engineType : engineType = mechanics.engineType
    compatibleCarMake ? compatibleCarMake = compatibleCarMake : compatibleCarMake = mechanics.compatibleCarMake
    imageURL ? imageURL = imageURL : imageURL = mechanics.fav_imageURL
    price ? price = price : price = mechanics.price
    category ? category = category : category = mechanics.category
    stockQuantity ? stockQuantity = stockQuantity : stockQuantity = mechanics.stockQuantity
    warrantyPeriod ? warrantyPeriod = warrantyPeriod : warrantyPeriod = mechanics.warrantyPeriod
    description ? description = description : description = mechanics.description

    await updateMechanicDb(partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description)
    res.send('User info was successfully updated')
}

const deleteMechanic = async (req, res) => {
    await deleteMechanicDb(req.params.id);
    res.send('Data was successfully removed')
}

// ADD TO CART INFO
const addToCart1 = async (req, res) => {
    console.log(req.body);
    let {id} = await getUserDB(req.body.user)
    console.log(id);
    
    // await addToCartDB(req.body.id, user_id)
    res.json({message: "Item successfully added to cart"})
}




export{getMechanics,getMechanic,addMechanic,deleteMechanic,updateMechanic,addToCart1}