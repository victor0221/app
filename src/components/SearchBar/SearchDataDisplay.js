import {React} from "react"
import "../Styles/StyleSearchBar.css"

export default function SearchDataDisplay(p){
    return(
        <>
{
  p.data.filter(post => {
    if (p.input === '') {
      return post;
    } else if (post.name.toLowerCase().includes(p.input.toLowerCase())) {
      return post;
    }
    return console.log("")
  }).map((post, index) => (
    <div className="BorderSearchBar" key={index}>
      <p>Name: {post.name}</p>
      <p>Email: {post.lastName}</p>
      <p>gender: {post.gender}</p>
      <p>email: {post.email}</p>
      <p>password: {post.password}</p>
    </div>
  ))
}



        </>
    )
}