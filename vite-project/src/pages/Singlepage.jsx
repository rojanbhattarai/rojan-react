import { useParams,useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"


function Singlepage() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate=useNavigate()

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await axios.get(`https://687af47babb83744b7ee4d60.mockapi.io/Blogs/${id}`, { timeout: 5000 })
        if (response.status === 200) {
          setBlog(response.data)
          setError(null)
        } else {
          setError(`Unexpected status: ${response.status}`)
        }
      } catch (err) {
        setError("Error fetching blog data")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [id])

  if (loading) return <div className="p-6 text-center">Loading...</div>
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>
  if (!blog) return <div className="p-6 text-center">Blog not found</div>
 
 
  async function deleteBlogs() {
    if (!window.confirm("Are you sure you want to delete this blog?")) return

    try {
      const response = await axios.delete(
        `https://687af47babb83744b7ee4d60.mockapi.io/Blogs/${id}`
      )
      if (response.status === 200|| response.status === 204) {
        alert("Blog deleted successfully!")
        navigate("/") // Redirect back to home
      } else {
        alert("Failed to delete the blog!")
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
  alert("An error occurred while deleting the blog.");

    }
  }
   function editBlogs(){
  
  navigate(`/edit/${blog.id}`)
}

   


  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <img
          src={blog.image}
          alt={blog.title}
          className="mb-6 rounded-lg object-cover w-full h-64"
        />
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">{blog.subtitle}</h2>
        <p className="mb-4">{blog.description || "No description provided."}</p>
        <p className="text-gray-500 text-sm">Created at: { Date(blog.createdAt)}</p>
      </div>
      <button type="button" onClick={deleteBlogs} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">DELETE BLOGS</button>
      <button type="button" onClick={editBlogs} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit BLOGS</button>
    </>
  )
}

export default Singlepage
