import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getWorkers, updateworkers } from '../../../actions/WoAction'

const WorkersUpdate = () => {
    const [salary, setSalary] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [age, setAge] = useState("");
    const { isWorkerUpdated, Worker } = useSelector(state => state.WorkerState)

    const { id: userId } = useParams();
    const dispatch = useDispatch();


    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('age', age)
        formData.append('salary', salary);
        formData.append('mobile', mobile);

        dispatch(updateworkers(userId, formData))
    }

    useEffect(() => {
        dispatch(getWorkers(userId))
    }, [isWorkerUpdated, dispatch])


    useEffect(() => {
        if (Worker._id) {
            setName(Worker.name);
            setSalary(Worker.salary);
            setMobile(Worker.mobile);
            setAge(Worker.age)
        }
    }, [Worker])

    return (
        <div>
            <form className="mt-4" onSubmit={submitHandler}>
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Age</label>
                        <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Salary</label>
                        <input type="text" name="sal" value={salary} onChange={(e) => setSalary(e.target.value)} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number" name="mob" value={mobile} onChange={(e) => setMobile(e.target.value)} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-warning">UPDATE Employee</button>
                </div>
            </form>
        </div>
    )
}

export default WorkersUpdate