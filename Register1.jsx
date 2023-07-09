
import React, { useState } from 'react';
import styled from 'styled-components';

const BankForm = () => {
    const [formData, setFormData] = useState({
        accountHolder: '',
        accountNumber: '',
        bankName: '',
        branchCode: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        phoneNumber: '',
        email: '',
        termsAccepted: false
    });

    const [formErrors, setFormErrors] = useState({
        accountHolder: '',
        accountNumber: '',
        bankName: '',
        branchCode: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        phoneNumber: '',
        email: '',
        termsAccepted: ''
    });

    const [tableData, setTableData] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: '' });
    };


    const handleEdit = (index) => {
        const selectedData = tableData[index];
        setFormData(selectedData);
        setEditIndex(index);
    };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (validateForm()) {
    //         setTableData([...tableData, formData]);
    //         resetForm();
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setTableData([...tableData, formData]);
            resetForm();
            console.log(tableData);
        }
    };


    const validateForm = () => {
        let valid = true;
        const errors = {};

        if (formData.accountHolder.trim() === '') {
            valid = false;
            errors.accountHolder = '*Account Holder is required';
        }

        if (formData.accountNumber.trim() === '') {
            valid = false;
            errors.accountNumber = '*Account Number is required';
        }

        if (formData.bankName.trim() === '') {
            valid = false;
            errors.bankName = '*Bank Name is required';
        }

        if (formData.branchCode.trim() === '') {
            valid = false;
            errors.branchCode = '*Branch Code is required';
        }

        if (formData.addressLine1.trim() === '') {
            valid = false;
            errors.addressLine1 = '*Address Line 1 is required';
        }

        if (formData.city.trim() === '') {
            valid = false;
            errors.city = '*City is required';
        }

        if (formData.state.trim() === '') {
            valid = false;
            errors.state = '*State is required';
        }

        if (formData.postalCode.trim() === '') {
            valid = false;
            errors.postalCode = '*Postal Code is required';
        }

        if (formData.country.trim() === '') {
            valid = false;
            errors.country = '*Country is required';
        }

        if (formData.phoneNumber.trim() === '') {
            valid = false;
            errors.phoneNumber = '*Phone Number is required';
        }

        if (formData.email.trim() === '') {
            valid = false;
            errors.email = '*Email is required';
        }

        if (!formData.termsAccepted) {
            valid = false;
            errors.termsAccepted = '*Please accept the Terms and Conditions';
        }

        setFormErrors(errors);
        return valid;
    };

    const resetForm = () => {
        setFormData({
            accountHolder: '',
            accountNumber: '',
            bankName: '',
            branchCode: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            postalCode: '',
            country: '',
            phoneNumber: '',
            email: '',
            termsAccepted: false
        });
    };

    const deleteRow = (index) => {
        const updatedData = [...tableData];
        updatedData.splice(index, 1);
        setTableData(updatedData);
    };
const Span=styled.span`
color: red`
    return (
        <div>
            <h2>Banking Information Form</h2>

            <form onSubmit={handleSubmit} className='form-group col-sm-6 offset-center'>
                <div>
                    <label>Account Holder:</label>
                    <input className="form-control"
                        type="text"
                        name="accountHolder"
                        value={formData.accountHolder}
                        onChange={handleChange}
                    />
                    {formErrors.accountHolder && <Span className="error">{formErrors.accountHolder}</Span>}
                </div>

                <div>
                    <label>Account Number:</label>
                    <input className="form-control"
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleChange}
                    />
                    {formErrors.accountNumber && <Span className="error">{formErrors.accountNumber}</Span>}
                </div>

                <div>
                    <label>Bank Name:</label>
                    <input className="form-control"
                        type="text"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleChange}
                    />
                    {formErrors.bankName && <Span className="error">{formErrors.bankName}</Span>}
                </div>

                <div>
                    <label>Branch Code:</label>
                    <input className="form-control"
                        type="text"
                        name="branchCode"
                        value={formData.branchCode}
                        onChange={handleChange}
                    />
                    {formErrors.branchCode && <Span className="error">{formErrors.branchCode}</Span>}
                </div>

                <div>
                    <label>Address Line 1:</label>
                    <input className="form-control"
                        type="text"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleChange}
                    />
                    {formErrors.addressLine1 && <Span className="error">{formErrors.addressLine1}</Span>}
                </div>

                <div>
                    <label>Address Line 2:</label>
                    <input className="form-control"
                        type="text"
                        name="addressLine2"
                        value={formData.addressLine2}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>City:</label>
                    <input className="form-control"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    {formErrors.city && <Span className="error">{formErrors.city}</Span>}
                </div>

                <div>
                    <label>State:</label>
                    <input className="form-control"
                        type="text" name="state"
                        value={formData.state}
                        onChange={handleChange}
                    />
                    {formErrors.state && <Span className="error">{formErrors.state}</Span>}
                </div>

                <div>
                    <label>Postal Code:</label>
                    <input className="form-control"
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                    />
                    {formErrors.postalCode && <Span className="error">{formErrors.postalCode}</Span>}
                </div>

                <div>
                    <label>Country:</label>
                    <input className="form-control"
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    />
                    {formErrors.country && <Span className="error">{formErrors.country}</Span>}
                </div>

                <div>
                    <label>Phone Number:</label>
                    <input className="form-control"
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    {formErrors.phoneNumber && <Span className="error">{formErrors.phoneNumber}</Span>}
                </div>

                <div>
                    <label>Email:</label>
                    <input className="form-control"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <Span className="error">{formErrors.email}</Span>}
                </div>

                <div>

                    <div >
                        <div>
                            <input className='form-check'
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                            />

                            <label>  Terms and Conditions:</label>
                        </div>
                    </div>
                    {formErrors.termsAccepted && <Span className="error">{formErrors.termsAccepted}</Span>}
                </div>
                <button type="submit" className='btn btn-outline-success'>{editIndex === -1 ? 'Submit' : 'Update'}</button>
            </form>

            <h2>Banking Information Table</h2>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Account Holder</th>
                        <th>Account Number</th>
                        <th>Bank Name</th>
                        <th>Branch Code</th>
                        <th>Address Line 1</th>
                        <th>Address Line 2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Postal Code</th>
                        <th>Country</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.accountHolder}</td>
                            <td>{data.accountNumber}</td>
                            <td>{data.bankName}</td>
                            <td>{data.branchCode}</td>
                            <td>{data.addressLine1}</td>
                            <td>{data.addressLine2}</td>
                            <td>{data.city}</td>
                            <td>{data.state}</td>
                            <td>{data.postalCode}</td>
                            <td>{data.country}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.email}</td>
                            <td>
                                <button onClick={() => deleteRow(index)}>Delete</button>

                                <button onClick={() => handleEdit(index)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BankForm;
