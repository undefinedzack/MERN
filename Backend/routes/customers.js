const router = require('express').Router()
let Customer = require('../models/customer.model')

router.get('/', async (req,res) => {
    try{
        console.log('im here', req.body)
        const customers = await Customer.find()
        res.json(customers)
    } catch (err) {
        res.send(err)
    }
})

router.get('/:id', async (req, res) => {
    try{

        const customer = await Customer.find({_id : req.params.id})
        res.json(customer)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', (req, res) => {
    const customer = new Customer({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        gender : req.body.gender
    })

    try{
        const c1 = customer.save()
        res.send(c1)
    } catch (err) {
        res.send(err)
    }
})

router.patch('/editCustomer/:id', (req, res) => {
    // console.log(Customer.find({_id : req.params._id}))
    try{
        Customer.find({_id : req.params.id}).remove()
        const customer = new Customer({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            gender : req.body.gender
        })
        console.log('new one', customer)
        const c = customer.save()
        res.send(c)
    } catch (e) {
        console.log(e)
    }
})

router.delete('/:id', async (req, res) => {
    console.log('im in here')
    try{
        console.log(req.params.id)
        const c = await Customer.find({_id: req.params.id}).remove()

        console.log(c)
        res.send(c)
    } catch (e) {
        console.log(e)
    }
})



module.exports = router
