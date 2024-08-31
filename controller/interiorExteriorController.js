import {getInteriorExteriorsDb,getInteriorExteriorDb,addInteriorExteriorDb,deleteInteriorExteriorDb,updateInteriorExteriorDb,addToCartDb} from '../model/interiorExteriorDb'

const getInteriorExteriors = async (req, res) => {
    res.json(await getInteriorExteriorsDb());
}

const getInteriorExterior= async (req, res) => {
    res.json(await getInteriorExteriorDb(req.params.id));
    console.log(req.params.id);
}

const addInteriorExterior = async (req, res) => {
    let {name, material, color, compatibleCarMake, price, stockQuantity, warrantyPeriod, description, imageURL, category} = req.body
    await addInteriorExteriorDb(name, material, color, compatibleCarMake, price, stockQuantity, warrantyPeriod, description, imageURL, category)
    res.send('Data was successfully inserted')
}

const deleteInteriorExterior = async (req, res) => {
    await deleteInteriorExteriorDb(req.params.id);
    res.send('Data was successfully removed')
}

const updateInteriorExterior = async (req,res) => {
    let {interiorExteriorID, name, material, color, compatibleCarMake, price, stockQuantity, warrantyPeriod, description, imageURL, category} = req.body
    let interiorExterior = await getUserDB(req.params.id)

    interiorExteriorID ? interiorExteriorID = interiorExteriorID : interiorExteriorID = interiorExterior.interiorExteriorID
    name ? name = name : name = interiorExterior.name
    material ? material = material : material = interiorExterior.material
    color ? color = color : color = interiorExterior.color
    compatibleCarMake ? compatibleCarMake = compatibleCarMake : compatibleCarMake = interiorExterior.fav_compatibleCarMake
    price ? price = price : price = interiorExterior.price
    stockQuantity ? stockQuantity = stockQuantity : stockQuantity = interiorExterior.stockQuantity
    warrantyPeriod ? warrantyPeriod = warrantyPeriod : warrantyPeriod = interiorExterior.warrantyPeriod
    description ? description = description : description = interiorExterior.description
    imageURL ? imageURL = imageURL : imageURL = interiorExterior.fav_imageURL
    category ? category = category : category = interiorExterior.category

    await updateInteriorExteriorDb(partName, material, engineType, compatibleCarMake, imageURL, stockQuantity, warrantyPeriod, description, price, category)
    res.send('User info was successfully updated')
}




export{getInteriorExteriors,getInteriorExterior,addInteriorExterior,deleteInteriorExterior,updateInteriorExterior}