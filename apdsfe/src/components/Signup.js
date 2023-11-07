import React, { useState } from "react";
import { useNavigate } from "react-router";
export default function Create() {
 const [form, setForm] = useState({
   username: "",
   passsword: "",
   
 });
 const navigate = useNavigate();
  // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
  // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
    await fetch("https://localhost:5050/user/signup", {
     method: "POST",
     headers: {
       "Content-Type": "application/json", 
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
    setForm({ username: "", password: ""});
   navigate("/");
 }
  // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Sign Up </h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="username">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ username: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="password">password</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ password: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <input
           type="submit"
           value="SIgn Up"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}