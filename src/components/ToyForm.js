import React, {useState} from "react";

function ToyForm({setToys}) {
  const [formData, setFormData] = useState({})
  const [toyName, setToyName] = useState('')
  const [toyImg, setToyImg] = useState('')
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e)=>{
        e.preventDefault()
        let newToy = {
          name: toyName,
          image: toyImg,
          likes: 0
        }
        fetch('http://localhost:3001/toys',{
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newToy)
        }).then(res => res.json())
        .then(data => {
          setToys((toys)=>{
            return [...toys, data]
          })
        })
        
      }
      }>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyName}
          onChange={(e)=> setToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyImg}
          onChange={(e)=> setToyImg(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
