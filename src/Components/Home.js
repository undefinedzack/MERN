import {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

const Home = () => {
    const [customers, setCustomers] = useState()
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8888/customers')
            .then(res => setCustomers(res))
            .then(console.log(customers))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8888/customers/'+id)
            .then(console.log('deleting...'))
    }

    return(
        <>
            <Link to={'/addCustomer'}>Add Customer</Link>
            <br />
            Search : <input onChange={(e) => setSearch(e.target.value)} value={search}/>
            <table style={{borderCollapse: 'collapse'}}>
                <tr>
                    <th><h1>Name</h1></th>
                    <th><h1>Last Name</h1></th>
                    <th><h1>Gender</h1></th>
                </tr>
                {customers && customers.data.map((customer) => {

                    if ( search === '' || customer.first_name.toLowerCase().includes(search.toLowerCase()) ||
                    customer.last_name.toLowerCase().includes(search.toLowerCase())){
                        return(
                            <tr>
                                <td>
                                    <h1>{customer.first_name}</h1>
                                </td>
                                <td>
                                    <h1>{customer.last_name}</h1>
                                </td>
                                <td>
                                    <h1>{customer.gender}</h1>
                                </td>
                                <td>
                                    <Link to={{
                                        pathname : 'editCustomer/'+customer._id,
                                        state : customer
                                    }}>Edit</Link>
                                </td>
                                <td>
                                    <button type={'submit'} onClick={ () => handleDelete(customer._id)} >Delete</button>
                                </td>

                            </tr>
                        )
                    }
                })}
            </table>
        </>
    )

}

export default Home