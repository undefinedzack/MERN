import {useState, useEffect} from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom'

const EditCustomer = (props) => {

    const {id} = useParams()
    const temp = props.location.state

    const [customer, setCustomer] = useState()

    useEffect(() => {
        // console.log(id)
        // axios.get('http://localhost:8888/customers/'+id)
        //     .then(res => setCustomer(res.data[0]))
        setCustomer(temp)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch('http://localhost:8888/customers/editCustomer/'+customer._id, customer)
            .then(console.log('Edit Success'))
    }

    return(
        <>
            {console.log(customer)}
            {customer &&
                <>
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

                    <button type={'submit'} onClick={(e) => handleSubmit(e)} >Edit Customer</button>
                </>
            }
        </>
    )

}

export default EditCustomer