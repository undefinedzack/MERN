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
    const c = Customer.find({_id : req.params.id})

    try{
        Customer.deleteOne({_id : req.params.id})
        c.save()
    } catch (e) {
        console.log(e)
    }
})

router.delete('/:id', (req, res) => {
    try{
        Customer.deleteOne({_id : req.params.id})
    } catch (e) {
        console.log(e)
    }
})



module.exports = router
