import {getMechanics,getMechanic,addMechanic,deleteMechanic,updateMechanic} from '../controller/mechanicController.js'
import {fetchUsers,fetchUser,addUser,removeUser,updateUser,loginUser} from '../controller/usersController.js'
import { checkUser,verifyAToken } from '../middleware/authenticate.js'
import { fetchCarts, fetchuserCart, fetchadduserCart, fetchupdateUserCart, deleteItem, deleteCart } from '../model/cartDb.js'
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



// users

router.get('/getUsers',fetchUsers)

router.get('/getUser/:id',fetchUser)

router.post('/addUser',addUser)

router.patch('/updateUser/:id',updateUser)

router.delete('/removeUser/:id',removeUser)


router.post('/login', checkUser,loginUser) 

// cart

// router.post('/addcartMech', verifyAToken, addToCart)
// cart

// router.post('/deleteFromCartMech', verifyAToken, deleteFromCart)

// router.post('/cartIntExt', verifyAToken)


// cart
router.get('/carts', fetchCarts)
// router.post('/cart/add', addItem);
router.get('/:id/cart', fetchuserCart)
router.post('/:id/cart', fetchadduserCart)
router.patch('/:id/cart/:itemID', fetchupdateUserCart)
router.delete('/:id/cart', deleteCart)
router.delete('/:id/cart/:itemID', deleteItem)
export{router}