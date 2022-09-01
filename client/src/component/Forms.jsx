import React from "react";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../bootstrap.min.css"
function Forms(props) {
    const {name , position , handleChange, handleSubmit, value ,err}=props;
    

  
  return (
    <Paper elevation={3}>
    <form onSubmit={handleSubmit} className="container-fluid p-3 bg-light rounded-5 ">
        <div className="row mb-3">
            <div className="col-md-2 text-center align-self-center fw-semibold">
               name:
            </div>
            <div className="col-md-9 ">
                <input  name="name" type="text" onChange={ handleChange}
                       value={name} className="form-control"/>
            </div>


            <div className="col-md-2  text-center align-self-center fw-semibold">
               position:
            </div>
            <div className="col-md-9 ">
                <input  name="position" type="text" onChange={ handleChange}
                       value={position} className="form-control mt-2"/>
            </div>


        </div>
        <div className="row mb-3">
          {err?
          <input type="submit" value={value} className="btn btn-dark btn-block w-50 mx-auto" disabled/>:
          <input type="submit" value={value} className="btn btn-dark btn-block w-50 mx-auto" />
        }
        <Link className="btn btn-light btn-block w-50 mx-auto   " to="/players/list">Cancel</Link>
        </div>

    </form>
   


    
</Paper>
  );
}

export default Forms;
