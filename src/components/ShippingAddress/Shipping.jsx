import axios from 'axios';
import { useEffect, useState } from 'react';
import { token } from '../../Constants';
import './Shipping.css'
function Shipping() {
    const initialValues = { firstname: "", lastname: "", address: "", country: "", city: "", state: "", pincode: "", mobile: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
   
    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
    };
    const validate = (values) => {
        var isValid = true;
        const errors = {};
        const userregex = /^[A-Za-z]+$/i;
        const addressregex = /^(?!\s)[A-Z0-9\s]+$/i;
        const countryregex = /^(?!\s)[A-Z\s]+$/i;
        const pincoderegex = /^(?!\s)[0-9]{6}$/
        const phoneregex = /^(?!\s)[0-9]{10}$/
        if (!userregex.test(values.firstname)) {
            errors.firstname = "Please enter valid name";
            isValid = false;
        }

        if (!userregex.test(values.lastname)) {
            errors.lastname = "Please enter valid name";
            isValid = false;
        }

        if (!addressregex.test(values.address)) {
            errors.address = "Please enter valid address";
            isValid = false;
        }
        else if (values.address.length < 5) {
            errors.address = "address must atleast have 5 characters.";
           isValid = false;
        }
        else if (values.address.length > 60) {
            errors.address = "address must not exceed 60 characters.";
            isValid = false;
        }
        if (!countryregex.test(values.country)) {
            errors.country = "Please enter valid country";
           isValid = false;
        }
        if (!userregex.test(values.city)) {
            errors.city = "Please enter valid city";
            isValid = false;
        }
        if (!userregex.test(values.state)) {
            errors.state = "Please enter valid state";
           isValid = false;
        }
        if (!pincoderegex.test(values.pincode)) {
            errors.pincode = "Please enter valid pincode";
            isValid = false;
        }
        if (!phoneregex.test(values.mobile)) {
            errors.mobile = "Please enter valid number";
            isValid = false;
        }

         if (!isValid)
         {
           setFormErrors(validate(formValues));

         }
         
        return isValid;
        
    };
    const handleApi = () => {
      var isValid = validate(formValues);
        console.log("isValid", isValid)
        if (isValid) {
            var postData =
            {
                FirstName: formValues.firstname,
                LastName: formValues.lastname,
                PhoneNumber: formValues.mobile,
                PinCode: formValues.pincode,
                City: formValues.city,
                Country: formValues.country,
                State: formValues.state,
                Address: formValues.address
            };
            let axiosConfig = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            axios.post("https://team3-step-dev-ed.develop.my.salesforce.com/services/apexrest/ShippingAddressCreation", postData, axiosConfig)
                .then((Response) => {
                    console.log(Response)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    return (
        <div className='shipping_div'>
            <form className="shipping_form" onSubmit={handleSubmit}>
                <h1 className='h1_shipping'>Shipping Address</h1>
                <div className='f_l_div'>
                    <div className='fdiv'>
                        <label className='flabel' htmlFor="firstname">First Name</label>
                        <input className='textbox' type="text" id="firstname" name="firstname" value={formValues.firstname} onChange={handleChange} maxLength="20" /><br />
                        <div className='formdiv'>
                            <span className='formerrors' >{formErrors.firstname} </span>
                        </div>
                    </div>
                    <div className='ldiv'>
                        <label className='flabel' htmlFor="lastname">Last Name</label>
                        <input className='textbox' type="text" id="lastname" name="lastname" value={formValues.lastname} onChange={handleChange} maxLength="20" /><br />
                        <div className='formdiv'>
                            <span className='formerrors' >{formErrors.lastname} </span>
                        </div>
                    </div>
                </div>
                <label className='flabel' htmlFor="address">Address</label>
                <textarea className='textarea' id="address" name="address" value={formValues.address} onChange={handleChange} ></textarea> <br />
                <div className='formdiv'><br />
                    <span className='formerrors' >{formErrors.address} </span>
                </div>
                <div className='f_l_div'>
                    <div className='fdiv'>
                        <label className='flabel' htmlFor="country">Country</label>
                        <input className='textbox' type="text" id="country" name="country" value={formValues.country} onChange={handleChange} maxLength="60" /><br />
                        <div className='formdiv'>
                            <span className='formerrors' >{formErrors.country} </span>
                        </div>
                    </div>
                    <div className='ldiv'>
                        <label className='flabel' htmlFor="city">City</label>
                        <input className='textbox' type="text" id="city" name="city" value={formValues.city} onChange={handleChange} maxLength="60" /><br />
                        <div className='formdiv'>
                            <span className='formerrors' >{formErrors.city} </span>
                        </div>
                    </div>
                </div>
                <div className='f_l_div'>
                    <div className='fdiv'>
                        <label className='flabel' htmlFor="state">State</label>
                        <input className='textbox' type="text" id="state" name="state" value={formValues.state} onChange={handleChange} maxLength="60" /><br />
                        <div className='formdiv'>
                            <span className='formerrors' >{formErrors.state} </span>
                        </div>
                    </div>
                    <div className='ldiv'>
                        <label className='flabel' htmlFor="pincode">Pincode</label>
                        <input className='textbox' type="text" id="pincode" name="pincode" value={formValues.pincode} onChange={handleChange} maxLength="6" /><br />
                        <div className='formdiv'>
                            <span className='formerrors' >{formErrors.pincode} </span>
                        </div>
                    </div>
                </div>
                <div className='f_l_div'>
                    <div className='fdiv'>
                        <label className='flabel' htmlFor="mobile">Mobile Number</label>
                        <input className='textbox' type="text" id="mobile" name="mobile" value={formValues.mobile} onChange={handleChange} maxLength="10" /><br />
                        <div className='formdiv'>
                            <span className='formerrors' >{formErrors.mobile} </span>
                        </div>
                    </div>
                </div>

                <div className='bdiv'>
                    <button className='sbutton' onClick={handleApi}>Save & Continue</button>
                </div>
            </form>

        </div>
    )
}
export default Shipping;