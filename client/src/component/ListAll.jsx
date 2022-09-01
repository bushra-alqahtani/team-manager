import React from "react";
//import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Paper } from "@material-ui/core";
import "../bootstrap.min.css"




function ListAll(props) {
 
  //const history =useHistory();
  const [players,setPlayers] = React.useState([])
  const [flag,setFlag]=React.useState(false)

 
  
  
  
  
  //==========fetch for data=================
  useEffect(() => {
    axios.get("http://localhost:8000/api/players")
      .then((res) => {
        setPlayers(res.data.players);
  
      }).catch((err) => console.log(err));
       },[flag]);


  
  //================Delete auth and update the list in DOM by sending data to main===========
  function deleteauthor (e,id)  {
      axios.delete("http://localhost:8000/api/players/deletebyId/"+id)
                  .then(res => {
                    console.log(res.data)
                    if(flag){
                        setFlag(false);
                    }else{
                        setFlag(true);
                    }
                    alert("are u sure to delete this player ")
                  }).catch(err=>console.log(err));      
      };
      
  return (
    <Paper elevation={3}>
      <div className="p-4 rounded container-fluid bg-light text-center fw-bolder"> 
      <h3> <Link to="/">Manage Players</Link> | <Link to="/status">Manage Player Status</Link> </h3>
          <hr />
    <h3> <Link to="/players/list">List</Link> | <Link to="/players/addplayer">Add Player</Link> </h3>

      </div>
      <div className="p-4 rounded container-fluid bg-light text-center fw-bolder">
      <div className="container"></div>
      
      <table className="table">
          <thead>
            <tr>
              <th scope="col">team name</th>
              <th scope="col">position</th>
              <th scope="col">action</th>
              
            </tr>
          </thead>
          <tbody>
            {players?.map((p,i)=>(
              <tr key={i}>
              <th>{p.name}</th>
              <td>{p.position}</td>
              <td><Button onClick={(e)=>{deleteauthor(e,p._id)}}> delete </Button></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Paper>
  );
}

export default ListAll;
