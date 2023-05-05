import React,{Formik,Form,ErrorMessage,Field} from 'react'
import './Form.css'
import { Fragment } from 'react';
import* as  yup from "yup"
const Validate = () => {
  const defaultvalue = {
    name: "",
    date: "",
    Gender: "",
    mobile: "",
    Govt: "",
    govtid: "",
    detail: "",
    idType: "",
    email: "",
    Emergency: "",
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
    occupation: "",
    religion: "",
    merital: "",
    blood: "",
    nationality: "",
    termsAndcon: false,
  };

  const ValidationSchema = yup.object().shape({
    name: yup.string().required("please Enter Your Name"),
    date: yup.string().required("please Enter Date"),
    Gender: yup.string().required("please Enter Your Gender"),
    mobile: yup.string().required("please Enter Your mobile Number").matches(
      /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number"
    ),
    Govt: yup.string().required("please Enter Id Type"),
    govtid: yup.string().required("please Enter Govt Issued Id"),
    detail: yup.string().required("please Enter detail"),
    idType: yup.string().required("please Enter idType"),
    email: yup.string().required("please Enter your email").email("please Enter Valid Email"),
    Emergency: yup.string().required("please Enter Your address Contact Number").matches(
      /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number"
    ),
    address: yup.string().required("please Enter Your address"),
    state: yup.string().required("please Enter Your state"),
    city: yup.string().required("please Enter Your city"),
    country: yup.string().required("please Enter Your country"),
    pincode: yup.string().required("please Enter pincode"),
    occupation: yup.string().required("please Enter Your occupation"),
    religion: yup.string().required("please Enter Your religion"),
    merital: yup.string().required("please Enter merital Status"),
    blood: yup.string().required("please Enter Your blood Group"),
    nationality: yup.string().required("please Enter Your nationality"),
  });

  const handleSubmit = (values) => {
    console.log("values", values);
  };


  // const handleSubmit = (values) => {
  //   console.log("values", values);
  //   const { name,date,Gender,mobile,Govt,govtid,detail,idType,email,Emergency,address,state,city,country,
  //     pincode,occupation,religion,merital,blood,nationality} = values;
  //   console.log( name,date,Gender,mobile,Govt,govtid,detail,idType,email,Emergency,address,state,city,country,
  //     pincode,occupation,religion,merital,blood,nationality);
  //   fetch("http://localhost:5000/register", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify([ name,date,Gender,mobile,Govt,govtid,detail,idType,email,Emergency,address,state,city,country,
  //     pincode,occupation,religion,merital,blood,nationality]),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "userRegister");
  //     });
  // };
  return (
    <Fragment>
      <div className="container">
        <Formik
          initialValues={defaultvalue}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <h2>Personal Detail</h2>
            <div className="f-Field">
              <div className="infoDetail">
              <div>
                <label aria-required="true">Name</label>
                <Field type="text" name="name" placeholder="Enter Name" />
                <p className="text-danger">
                    <ErrorMessage name="name"/>
                </p>
                </div>
                <div>
                <label aria-required="true">Date of Birth or Age</label>
                <Field type="date"  name="date"/>
                <p className="text-danger">
                    <ErrorMessage name="date"/>
                </p>
                </div>
                <div>
                <label htmlFor="">Sex</label>
                <Field component="select" name="Gender">
                <option value="" disabled>Enter Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="other">other</option>
                </Field>
                <p className="text-danger">
                    <ErrorMessage name="Gender"/>
                </p>
                </div>
              </div>
              <div className="infoDetail">
              <div>
                <label>Mobile</label>
                <Field type="mobile" placeholder="Enter Name" name="mobile"/>
                <p className="text-danger">
                    <ErrorMessage name="mobile"/>
                </p>
                </div>
                <div>
                <label htmlFor="">Govt Issued Id</label>
                <Field component="select" name="Govt">
                  <option value="" disabled>Id Type</option>
                  <option value="Female">Female</option>
                  <option value="other">other</option>
                 
                </Field>
                
                <Field type="mobile" placeholder="Enter Name" name="govtid"/>
                <p className="text-danger">
                    <ErrorMessage name="govtid"/>
                </p>
              
                </div>
              </div>
            </div>

            <h2>Contact Detail</h2>
            <div className="f-Field">
              <div className="infoDetail">
              <div>
                <label htmlFor="">Guardian Details</label>
                <Field component="select" name="detail">
                  <option value="" disabled>Id Type</option>
                  <option value="Female">Female</option>
                  <option value="other">other</option>
                  <Field type="mobile" placeholder="Enter Name" name="idType" />
                  <p className="text-danger">
                    <ErrorMessage name="idType"/>
                </p>
                </Field>
                </div>
                <div>
                <label>Email</label>
                <Field type="email" placeholder="Enter Name" name="email"/>
                <p className="text-danger">
                    <ErrorMessage name="email"/>
                </p>
                </div>
                <div>
                <label>Emergency Contact Number</label>
                <Field type="mobile" placeholder="Enter Name" name="Emergency" />
                <p className="text-danger">
                    <ErrorMessage name="Emergency"/>
                </p>
                </div>
              </div>
            </div>
            <h2>Address Detail</h2>
            <div className="f-Field">
              <div className="infoDetail">
              <div>
                <label aria-required="true">Address</label>
                <Field type="text" placeholder="Enter Name" name="address"/>
                <p className="text-danger">
                    <ErrorMessage name="address"/>
                </p>
                </div>
                <div>
                <label htmlFor="">State</label>
                <Field component="select" name="state">
                  <option value="" disabled>Select State</option>
                  <option value="mp">mp</option>
                  <option value="Mh">Mh</option>
                </Field>
                  <p className="text-danger">
                    <ErrorMessage name="state"/>
                </p>
                </div>
               <div>
                <label htmlFor="">City</label>
                <Field component="select" name="city">
                  <option value="" disabled>Select City</option>
                  <option value="bhopal">bhopal</option>
                  <option value="Mumbai">Mumbai</option>
                </Field>
                <p className="text-danger">
                    <ErrorMessage name="city"/>
                </p>
                </div>
              </div>
              <div className="infoDetail">
              <div>
                <label htmlFor="">Country</label>
                <Field component="select" name="country">
                  <option value="" disabled>Select Country</option>
                  <option value="india">india</option>
                  <option value="usa">usa</option>
                </Field>
                  <p className="text-danger">
                    <ErrorMessage name="country"/>
                </p>
                </div>
                <div>
                <label aria-required="true">Pincode</label>
                <Field type="text" placeholder="Enter Name" name="pincode"/>
                <p className="text-danger">
                    <ErrorMessage name="pincode"/>
                </p>
                </div>
              </div>
            </div>
            <h2>Other Detail</h2>
            <div className="f-Field">
              <div className="infoDetail">
              <div>
                <label aria-required="true">Occupation</label>
                <Field type="text" placeholder="Enter Name" name="occupation" />
                <p className="text-danger">
                    <ErrorMessage name="occupation"/>
                </p>
                </div>
                <div>
                <label htmlFor="">Religion</label>
                <Field component="select" name="religion">
                <option value="" disabled>Select Religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Hindu">Hindu</option>
                </Field>
                <p className="text-danger">
                    <ErrorMessage name="religion"/>
                </p>
                </div>
                <div>
                <label htmlFor="">Merital Status</label>
                <Field component="select" name="merital">
                <option value="" disabled>Select Merital Status</option>
                  <option value="Merried">Merried</option>
                  <option value="Unmerried">Unmerried</option>
                </Field>
                <p className="text-danger">
                    <ErrorMessage name="merital"/>
                </p>
                </div>
              </div>
              <div className="infoDetail">
              <div>
                <label htmlFor="">Blood Group</label>
                <Field component="select" name="blood">
                <option value="" disabled>Select Blood Group</option>
                  <option value="A">A</option>
                  <option value="A+">A+</option>
                  <option value="B">B</option>
                  <option value="B+">B+</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                </Field>
                <p className="text-danger">
                    <ErrorMessage name="blood"/>
                </p>
                </div>
                <div>
                <label htmlFor=""> Nationality</label>
                <Field component="select" name="nationality" placeholder="Select Your Nationality">
                <option value="" disabled>Select Nationality</option>
                  <option value="Indian">Indian</option>
                  <option value="Americal">Americal</option>
                </Field>
                <p className="text-danger">
                    <ErrorMessage name="nationality"/>
                </p>
                </div>
              </div>
              
            </div>
            
            <div className="f-field">
            <div className="c-Field">
                <Field type="checkbox" name="termsAndcon"></Field>
                <label>i accept terms and condition</label>
              
                </div>
                <p className="text-danger">
                    <ErrorMessage name="termsAndcon"/>
                </p>
              </div>
            <div className="btn">
              <button type="submit" className="button">
                Cancel
              </button>
              <button type="submit" className="button btn-1">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Fragment>
  );
};
export default Validate

