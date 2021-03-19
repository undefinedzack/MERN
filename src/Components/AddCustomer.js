import {useState, useEffect} from 'react'
import axios from "axios";

const AddCustomer = () => {
    const [customer, setCustomer] = useState({
        'first_name' : '',
        'last_name' : '',
        'gender' : ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8888/customers/', customer)
            .then(res => console.log(res))
    }

    return(
        <>
            {console.log(customer)}
            Name - <input type={'text'} value={customer.first_name} onChange={e => setCustomer(
                {
                    ...customer,
                    first_name : e.target.value
                }
            )}  />
            <br />

            Last Name - <input type={'text'} value={customer.last_name} onChange={e => setCustomer(
                {
                    ...customer,
                    last_name : e.target.value
                }
            )}  />
            <br />

            Gender - <input type={'text'} value={customer.gender} onChange={e => setCustomer(
                {
                    ...customer,
                    gender : e.target.value
                }
            )}  />
            <br />

            <button type={'submit'} onClick={(e) => handleSubmit(e)} >Add Customer</button>
        </>
    )
}

export default AddCustomer