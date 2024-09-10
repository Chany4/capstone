import {getMechanics,getMechanic,addMechanic,deleteMechanic,updateMechanic} from '../controller/mechanicController.js'
import {getInteriorExteriors,getInteriorExterior,addInteriorExterior,deleteInteriorExterior,updateInteriorExterior} from '../controller/interiorExteriorController.js'
import {fetchUsers,fetchUser,addUser,removeUser,updateUser,loginUser} from '../controller/usersController.js'
import { checkUser,verifyAToken } from '../middleware/authenticate.js'
import { addToCart,deleteFromCart } from '../controller/cartController.js'
import express from 'express'
import bodyParser from 'body-parser'

const router = express.Router()
router.use(bodyParser.json())

// mechanicalParts

router.get('/getMechanics',getMechanics)

router.get('/getMechanic/:id',getMechanic)

router.post('/addMechanic',addMechanic)

router.patch('/mech/:id',updateMechanic)

router.delete('/mech/:id',deleteMechanic)



// interior and  exterior 

router.get('/getInteriorExterior',getInteriorExteriors)

router.get('/getInteriorExterior/:id',getInteriorExterior)

router.post('/addInteriorExterior',addInteriorExterior)

router.patch('/intExt/:id',updateInteriorExterior)

router.delete('/intExt/:id',deleteInteriorExterior)



// users

router.get('/getUsers',fetchUsers)

router.get('/getUser/:id',fetchUser)

router.post('/addUser',addUser)

router.patch('/updateUser/:id',updateUser)

router.delete('/removeUser/:id',removeUser)


router.post('/login', checkUser,loginUser)

// cart

router.post('/addcartMech', verifyAToken, addToCart)
// cart

router.post('/deleteFromCartMech', verifyAToken, deleteFromCart)

// router.post('/cartIntExt', verifyAToken)

export{router}