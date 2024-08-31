import {getMechanics,getMechanic,addMechanic,deleteMechanic,updateMechanic} from '../controller/mechanicController.js'
import {getInteriorExteriors,getInteriorExterior,addInteriorExterior,deleteInteriorExterior,updateInteriorExterior} from '../controller/interiorExteriorController.js'
import {getTools,getTool,addTool,deleteTool,updateTool} from '../controller/toolsController.js'
import {fetchUsers,fetchUser,addUser,removeUser,updateUser,loginUser} from '../controller/usersController.js'
import {express} from express;

const router = express.Router()

// mechanicalParts

router.get('/getMechanics',getMechanics)

router.get('/getMechanic',getMechanic)

router.post('/addMechanics',addMechanic)

router.delete('/mech/:id',deleteMechanic)

router.patch('/mech/:id',updateMechanic)


// interior and  exterior 

router.get('/getMechanics',getInteriorExteriors)

router.get('/getMechanic',getInteriorExterior)

router.post('/addMechanics',addInteriorExterior)

router.delete('/intExt/:id',deleteInteriorExterior)

router.patch('/intExt/:id',updateInteriorExterior)

// tools

router.get('/getTools',getTools)

router.get('/getTool',getTool)

router.post('/addTool',addTool)

router.delete('/tools/:id',deleteTool)

router.patch('/tools/:id',updateTool)

// users

router.get('/getUsers',fetchUsers)

router.get('/getUser',fetchUser)

router.post('/addUser',addUser)

router.delete('/addUser/:id',removeUser)

router.patch('/updateUser/:id',updateUser)

router.post('/login',loginUser)



export{router}