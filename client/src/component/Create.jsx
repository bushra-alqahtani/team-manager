import React from "react";
import axios from "axios";
import Forms from "./Forms";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../bootstrap.min.css"





function Create(props) {

//=====initial==========
const [player,setPlayer] = React.useState({name:"",position:""})
const [data,setData]=React.useState([])

const history=useHistory();
const [err,setErr]=React.useState({
  msg:"",
  isError:true
});

//====================Functions=====================
function handelCange(e){
  setData(false)
  setPlayer({...player,[e.target.name]:e.target.value})
   //handle errors
   if (e.target.value.length < 10) {
    setErr({ msg: `Name must be at least 3`, isError: true })
    }
    else if (e.target.value.length >= 3) {
      setErr({ msg: '', isError: false })
    }

}  





function handleSubmit(e){
    e.preventDefault()
     axios.post("http://localhost:8000/api/player/new",player)
     .then(res => {
      setData(res.data)
      history.push("/players/list")  
      }).catch(err => console.log(err));
  
  }

  return (
<div className="p-4 rounded container-fluid bg-light text-center fw-bolder ">

    <h3> <Link to="/">Manage Players</Link> | <Link to="/status">Manage Player Status</Link> </h3>
          <hr />
    <h3> <Link to="/players/list">List</Link> | <Link to="/players/addplayer">Add Player</Link> </h3>


<div>
{err &&<div className="text-danger">{err.msg}</div>}
  <Forms {...player}  handleChange={handelCange} handleSubmit={handleSubmit} value="Create" err={err.isError} /> 
</div>
    
</div>

  );
}

export default Create;
