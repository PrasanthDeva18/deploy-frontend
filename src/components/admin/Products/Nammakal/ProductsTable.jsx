import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAdminNammakals, deleteNammakals } from '../../../../actions/ProductActions/Nactions'


const ProductsTable = () => {


    const { Nammakals = [], isNammakalDeleted } = useSelector(state => state.NammakalState)
    const dispatch = useDispatch()
    // console.log(Workers)
    const deleteHandler = (e, id) => {
        e.target.disabled = true;
        dispatch(deleteNammakals(id))
    }

    useEffect(() => {
        dispatch(getAdminNammakals);

    }, [dispatch, isNammakalDeleted])
    return (
        <div>
            <center>
                <div className="form">
                    {
                        Nammakals.length > 0 ?
                            (
                                <>
                                    <table class="table table-striped">
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Stocks</th>
                                            <th>District Name</th>
                                            <th>Description</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>

                                        {
                                            Nammakals.map((item) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                {
                                                                    item.name
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    item.price
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    item.stocks
                                                                }
                                                            </td>

                                                            <td>
                                                                {
                                                                    item.ProductDistrict
                                                                }
                                                            </td>

                                                            <td>
                                                                {
                                                                    item.description
                                                                }
                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/di/na/update/${item._id}`}><button style={{ backgroundColor: 'orange', border: 'none', width: '105px', height: '35px', borderRadius: '5px', color: 'white' }}>Edit</button></Link>
                                                            </td>
                                                            <td>
                                                                <button onClick={e => deleteHandler(e, item._id)} style={{ backgroundColor: 'red', border: 'none', width: '85px', height: '35px', borderRadius: '5px', color: 'white' }}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </table>
                                </>
                            ) :
                            (<></>)
                    }
                </div>
            </center>
        </div>
    )
}

export default ProductsTable