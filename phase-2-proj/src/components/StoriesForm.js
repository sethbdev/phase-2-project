import React, { useState } from "react";
 
const StoriesForm = ({ onStoryAdd }) => {
 
 const [newStoryTitle, setNewStoryTitle] = useState("");
 const [newStoryAuthor, setNewStoryAuthor] = useState("");
 const [newStoryContent, setNewStoryContent] = useState("");
 
 function handleSubmit(e) {
   e.preventDefault();
   const formData = { title: newStoryTitle, author: newStoryAuthor, content: newStoryContent };
   fetch("http://localhost:3000/spookystories", {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(formData)
   })
   .then((res) => res.json())
   .then((newStoryData) => onStoryAdd(newStoryData))
 } 
 
 
 return (
 <div className="stories-form">
   <h1>Add Your Own Spooky Story</h1>
   <form onSubmit={handleSubmit}>
     <label>Title: </label>
     <input type="text" id="title" value={newStoryTitle} onChange={e => setNewStoryTitle(e.target.value)}/>
 
     <label>Author: </label>
     <input type="text" id="author" value={newStoryAuthor} onChange={e => setNewStoryAuthor(e.target.value)}/>
 
     <label>Story: </label>
     <textarea type="text" id="story" value={newStoryContent} onChange={e => setNewStoryContent(e.target.value)}/>
 
     <button type="submit">Submit Story</button>
   </form>
 </div>
 )
};
 
export default StoriesForm;