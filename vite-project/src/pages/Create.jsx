import { useState } from "react"
import Navbar from "./components/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Create() {
  const [title,setTitle]=useState("")
  const [subtitle,setSubtitle]=useState("")
  const [description,setDescription]=useState("")
  const [image,setImage]=useState("")
  const navigate= useNavigate()
  async function Datatobackend(e) {
    e.preventDefault()
    const response= await axios.post('https://687af47babb83744b7ee4d60.mockapi.io/Blogs',
      {
      title: title,
      subtitle: subtitle,
      description: description,
      image: image
    })
     if (response.status === 201 || response.status === 200) {
      alert(" Blog created successfully!");

      // Clear fields
      setTitle("");
      setSubtitle("");
      setDescription("");
      setImage("");

      navigate("/");
    } else {
      alert(" Failed to create blog!");
    }

  }



    
  

  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Create a Blog Post
        </h1>

        <form  onSubmit={Datatobackend}  action="/addBlog" method="POST" className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-semibold text-gray-700">
              
            </label>
            <input onChange={(e)=>setTitle(e.target.value)}
              type="text"
              id="title"
              name="title"
              placeholder="Enter blog title"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>

          {/* Subtitle */}
          <div>
            <label htmlFor="subtitle" className="block mb-2 text-sm font-semibold text-gray-700">
              Subtitle
            </label>
            <input onChange={(e)=>setSubtitle(e.target.value)}
              type="text"
              id="subtitle"
              name="subtitle"
              placeholder="Enter blog subtitle"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea onChange={(e)=>setDescription(e.target.value)}
              id="description"
              name="description"
              rows="6"
              placeholder="Write your blog content here"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-y"
            />
          </div>

          {/* Image URL */}
          <div>
            <label htmlFor="image" className="block mb-2 text-sm font-semibold text-gray-700">
              Image URL (optional)
            </label>
            <input onChange={(e)=>setImage(e.target.value)}
              type="text"
              id="image"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-md transition duration-200"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Create
