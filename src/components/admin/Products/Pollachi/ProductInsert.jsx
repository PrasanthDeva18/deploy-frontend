import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createNewPr } from '../../../../actions/ProductActions/Paction'


const ProductInsert = () => {

    const [ProductDistrict, setProductDistrict] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stocks, setStocks] = useState("")

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('ProductDistrict', ProductDistrict);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('stocks', stocks);
        dispatch(createNewPr(formData));
    }


    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <label className='q'>Add Erode Products</label>
                <div className="form-body">
                    <div className="name">
                        <label className="form__label" for="Name">Name </label><br></br>

                        <input type="text" name="" id="name" value={name} className="form__input" placeholder="Name" onChange={(event) => {
                            setName(event.target.value);
                        }} />
                    </div>
                    <div className="email">
                        <label className="form__label" for="email">Product District </label><br></br>
                        <input type="text" id="email" value={ProductDistrict} className="form__input" placeholder="Email" onChange={(event) => {
                            setProductDistrict(event.target.value);
                        }} />
                    </div>
                    <div className="salary">
                        <label className="form__label" for="salary">Description </label><br></br>
                        <input className="form__input" type="text" value={description} id="salary" placeholder="Salary" onChange={(event) => {
                            setDescription(event.target.value);
                        }} />
                    </div>
                    <div className="contact">
                        <label className="form__label" for="number">Price </label><br></br>
                        <input className="form__input" type="number" value={price} minLength={10} id="contact" placeholder="contact num" onChange={(event) => {
                            setPrice(event.target.value);
                        }} required />
                    </div>
                    <div className="city">
                        <label className="form__label" for="city"></label><br></br>
                        <input className="form__input" type="text" value={stocks} id="city" placeholder="City" onChange={(event) => {
                            setStocks(event.target.value);
                        }} />
                    </div>

                    <div className="v">
                        <button type="submit" className="btn1">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProductInsert