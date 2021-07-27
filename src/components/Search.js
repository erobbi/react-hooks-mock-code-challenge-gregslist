import React, {useState} from "react";

// function GregForm(){
//   const [formData, formDataSetter] = useState({searchField: "",})
// }


// function manageFormData(e){
//   let name = e.target.name
//   let value = e.target.value

//   formDataSetter({
//       ...formData, [searchField]: value
//   })
// }

// const [submittedData, submittedDataSetter] = useState([])

// function handleSubmit(e){
//   console.log("handSubmit here")
//   e.preventDefault()
//   //capture submitted data
//   const newFormData = {title: formData.title, imgUrl: formData.imgUrl}

//   // merge submitted data with exisiting form submissions
//   submittedDataSetter([...submittedData, newFormData]) // this will add newForm data to submitted data
// }


// // we are not adding data. we are filtering
// const Submissions = submittedData.map((data, index) =>{
//   return (
//           <div key={index}>
//               <br/>
//               <p>Title: {data.title}</p>
//               <p>imgUrl: {data.imgUrl}</p>
//           </div>
//   )
// })


function Search() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input type="text" id="search" placeholder="search free stuff" value={""} onChange={(e) => console.log(e.target.value)} name="searchField"/>
      <button type="submit">🔍</button>
    </form>
    // {Submissions}
  )
}

export default Search;
