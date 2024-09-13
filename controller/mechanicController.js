import {getMechanicsDb,getMechanicDb,addMechanicDb,deleteMechanicDb,updateMechanicDb} from '../model/mechanicDb.js'


// const getMechanics = async (req, res) => {
//     res.json(await getMechanicsDb());
// }

const getMechanics = async (req, res) => {
    try {
        const mechanics = await getMechanicsDb();
        // Check if mechanics data was retrieved
        if (mechanics && mechanics.length > 0) {
            res.status(200).json(mechanics);  // Success 
        } else {
            res.status(404).json({ message: 'No mechanics found' });  // No data found
        }
    } catch (error) {
        // Handle unexpected errors
        console.error('Error fetching mechanics:', error);
        res.status(500).json({ message: 'Internal Server Error' });  // Internal server error
    }
};


// const getMechanic= async (req, res) => {
//     res.json(await getMechanicDb(req.params.id));
//     console.log(req.params.id);

// }

const getMechanic = async (req, res) => {
    try {
        // Extract the mechanic ID from the request parameters
        const mechanicId = req.params.id;

        // Log the mechanic ID for debugging purposes
        console.log(`Fetching mechanic with ID: ${mechanicId}`);

        // Retrieve the mechanic from the database
        const mechanic = await getMechanicDb(mechanicId);

        // Check if the mechanic was found
        if (!mechanic) {
            return res.status(404).json({ message: 'Mechanic not found' });  // Not found, status code 404
        }

        // Respond with the mechanic data
        res.status(200).json(mechanic);  // Success, status code 200
    } catch (error) {
        // Handle unexpected errors
        console.error('Error fetching mechanic:', error);  // Log the error for debugging purposes
        res.status(500).json({ message: 'Internal Server Error' });  // Internal server error, status code 500
    }
};


// const addMechanic = async (req, res) => {
//     let {partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description} = req.body
//     await addMechanicDb(partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description)
//     res.send('Data was successfully inserted')
// }

const addMechanic = async (req, res) => {
    try {
        const { partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description } = req.body;

        // Validate input data (basic example; you might want to add more validation)
        if (!partName || !material || !engineType || !compatibleCarMake || !imageURL || !price || !category || !stockQuantity || !warrantyPeriod || !description) {
            return res.status(400).json({ message: 'All fields are required' });  // Bad request, status code 400
        }
        // Add the mechanic to the database
        await addMechanicDb(partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description);
        // Respond with success message
        res.status(201).send('Data was successfully inserted');  // Created, status code 201
    } catch (error) {
        // Handle unexpected errors
        console.error('Error adding mechanic:', error);  // Log the error for debugging purposes
        res.status(500).json({ message: 'Internal Server Error' });  // Internal server error, status code 500
    }
};


// const updateMechanic = async (req,res) => {
//     let {partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description} = req.body
//     let mechanics = await updateMechanicDb(req.params.id)

//     partName ? partName = partName : partName = mechanics.partName
//     material ? material = material : material = mechanics.material
//     engineType ? engineType = engineType : engineType = mechanics.engineType
//     compatibleCarMake ? compatibleCarMake = compatibleCarMake : compatibleCarMake = mechanics.compatibleCarMake
//     imageURL ? imageURL = imageURL : imageURL = mechanics.fav_imageURL
//     price ? price = price : price = mechanics.price
//     category ? category = category : category = mechanics.category
//     stockQuantity ? stockQuantity = stockQuantity : stockQuantity = mechanics.stockQuantity
//     warrantyPeriod ? warrantyPeriod = warrantyPeriod : warrantyPeriod = mechanics.warrantyPeriod
//     description ? description = description : description = mechanics.description

//     await updateMechanicDb(partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description)
//     res.send('User info was successfully updated')
// }

const updateMechanic = async (req, res) => {
    try {
        // Extract fields from request body
        const { partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description } = req.body;

        // Retrieve existing mechanic details from the database
        const existingMechanic = await updateMechanicDb(req.params.id);

        if (!existingMechanic) {
            return res.status(404).json({ message: 'Mechanic not found' });  // Not found, status code 404
        }

        // Use existing values if new values are not provided
        const updatedMechanic = {
            partName: partName ?? existingMechanic.partName,
            material: material ?? existingMechanic.material,
            engineType: engineType ?? existingMechanic.engineType,
            compatibleCarMake: compatibleCarMake ?? existingMechanic.compatibleCarMake,
            imageURL: imageURL ?? existingMechanic.imageURL,
            price: price ?? existingMechanic.price,
            category: category ?? existingMechanic.category,
            stockQuantity: stockQuantity ?? existingMechanic.stockQuantity,
            warrantyPeriod: warrantyPeriod ?? existingMechanic.warrantyPeriod,
            description: description ?? existingMechanic.description
        };

        // Update the mechanic in the database
        await updateMechanicDb(req.params.id, updatedMechanic);

        // Respond with success message
        res.status(200).send('Mechanic info was successfully updated');  // Success, status code 200
    } catch (error) {
        // Handle unexpected errors
        console.error('Error updating mechanic:', error);  // Log the error for debugging purposes
        res.status(500).json({ message: 'Internal Server Error' });  // Internal server error, status code 500
    }
};


// const deleteMechanic = async (req, res) => {
//     await deleteMechanicDb(req.params.id);
//     res.send('Data was successfully removed')
// }

const deleteMechanic = async (req, res) => {
    try {
        // Attempt to delete the mechanic from the database
        const result = await deleteMechanicDb(req.params.id);

        // Check if the delete operation affected any rows
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Mechanic not found' });  // Not found, status code 404
        }

        // Respond with success message
        res.status(200).send('Data was successfully removed');  // Success, status code 200
    } catch (error) {
        // Handle unexpected errors
        console.error('Error deleting mechanic:', error); 
        res.status(500).json({ message: 'Internal Server Error' });  // Internal server error, status code 500
    }
};





export{getMechanics,getMechanic,addMechanic,deleteMechanic,updateMechanic}