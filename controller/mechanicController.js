import {getMechanicsDb,getMechanicDb,addMechanicDb,deleteMechanicDb,updateMechanicDb} from '../model/mechanicDb.js'


const getMechanics = async (req, res) => {
    res.json(await getMechanicsDb());
}

const getMechanic= async (req, res) => {
    res.json(await getMechanicDb(req.params.id));
    console.log(req.params.id);
}

const addMechanic = async (req, res) => {
    let {partName, material, engineType, compatibleCarMake, imageURL, stockQuantity, warrantyPeriod, description, price, category} = req.body
    await addMechanicDb(partName, material, engineType, compatibleCarMake, imageURL, stockQuantity, warrantyPeriod, description, price, category)
    res.send('Data was successfully inserted')
}

const deleteMechanic = async (req, res) => {
    await deleteMechanicDb(req.params.id);
    res.send('Data was successfully removed')
}

const updateMechanic = async (req,res) => {
    let {partName, material, engineType, compatibleCarMake, imageURL, stockQuantity, warrantyPeriod, description, price, category} = req.body
    let mechanics = await getUserDB(req.params.id)

    partName ? partName = partName : partName = mechanics.partName
    material ? material = material : material = mechanics.material
    engineType ? engineType = engineType : engineType = mechanics.engineType
    compatibleCarMake ? compatibleCarMake = compatibleCarMake : compatibleCarMake = mechanics.fav_compatibleCarMake
    imageURL ? imageURL = imageURL : imageURL = mechanics.fav_imageURL
    stockQuantity ? stockQuantity = stockQuantity : stockQuantity = mechanics.stockQuantity
    warrantyPeriod ? warrantyPeriod = warrantyPeriod : warrantyPeriod = mechanics.warrantyPeriod
    description ? description = description : description = mechanics.description
    price ? price = price : price = mechanics.price
    category ? category = category : category = mechanics.category

    await updateMechanicDb(partName, material, engineType, compatibleCarMake, imageURL, stockQuantity, warrantyPeriod, description, price, category)
    res.send('User info was successfully updated')
}




export{getMechanics,getMechanic,addMechanic,deleteMechanic,updateMechanic}