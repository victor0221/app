import React, { useState} from 'react';
import "../Styles/StyleForm.css"
import Notify from "../Notify"

function Form() {
const [formData, setFormData] = useState({
name: '',
email: '',
password: '',
});

const [showNotify, setShowNotify] = useState(false);

const handleClick = () => {
    setShowNotify(true);
    setTimeout(() => {
      setShowNotify(false);
    }, 3000);
  };

const [submittedData, setSubmittedData] = useState([]);
const handleUpdateFormData = (event) => {
const { name, value } = event.target;
setFormData((prevData) => ({
...prevData,
[name]: value,
}));
};

const handleFormDataSubmit = (event) => {
event.preventDefault();
const newData = {
name: formData.name,
email: formData.email,
password: formData.password,
id: submittedData.length + 1
}
setSubmittedData([...submittedData, newData]);
setFormData({
name: '',
email: '',
password: '',
});
};

function eventHandler(event){
    handleFormDataSubmit(event)
    handleClick()
}

return (
<div className="form-wrapper">
<form onSubmit={eventHandler}>
<div className="form-container">
<div className="form-row">
<label htmlFor="name">Name</label>
<input
           type="text"
           name="name"
           onChange={handleUpdateFormData}
           value={formData.name}
           placeholder="Enter your name"
           required
         />
</div>
<div className="form-row">
<label htmlFor="email">Email</label>
<input
           type="email"
           name="email"
           onChange={handleUpdateFormData}
           value={formData.email}
           placeholder="Enter your email"
           required
         />
</div>
<div className="form-row">
<label htmlFor="password">Password</label>
<input
           type="password"
           name="password"
           onChange={handleUpdateFormData}
           value={formData.password}
           placeholder="Enter your password"
           required
         />
</div>
<button type="submit">Submit</button>
</div>
</form>
{showNotify && (<Notify message="Form Submitted" type="--"/>)}
{submittedData.map((data) => (
<div key={data.id} className="submitted-data">
<h3>API Call {data.id}:</h3>
<p>{data.name}---{data.email}---{data.password}</p>
</div>
))}
</div>
);
}

export default Form;

