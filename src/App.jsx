import ProfileCard from "./ProfileCard";
import "./App.css";
import { useState } from "react";
function App() {
  const users = [
    {
      name: "Nishu",
      age: 25,
      city: "Bangalore",
      image:
        "https://as2.ftcdn.net/v2/jpg/01/85/04/85/1000_F_185048528_i9zX0FC3Q8iDNb2E5hanWzN0KeJSXSy6.jpg",
      profession: "Frontend developer",
    },

    {
      name: "Jay",
      age: 30,
      city: "Ahmedabad",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.YIre5HGHiqBa7DCmrF4KwwHaJQ?pid=Api&h=220&P=0",
      profession: "Operator",
    },
    {
      name: "Komal",
      age: 22,
      city: "Delhi",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.2mxZ-Zj9mHhdBGsSdR71PgHaHa?pid=Api&h=220&P=0",
      profession: "Doctor",
    },
    {
      name: "Jasmin",
      age: 24,
      city: "Kanpur",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.THjEN1gsEnJhGl-32adSjQHaE8?pid=Api&h=220&P=0",
      profession: "Doctor",
    },
    {
      name: "Arya",
      age: 24,
      city: "Delhi",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.qyJax3sLq5wN6egvxdkblgAAAA?pid=Api&h=220&P=0",
      profession: "Doctor",
    },
    {
      name: "suman",
      age: 34,
      city: "Ahmedabad",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.i9tgTvW8-5xhrPhsAUedOQHaFm?pid=Api&h=220&P=0",
      profession: "Doctor",
    },
    {
      name: "Rohan",
      age: 25,
      city: "Bhavnagar",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.iE9OIkqqn3YvER_OCqUVkQHaFK?pid=Api&h=220&P=0",
      profession: "Doctor",
    },
    {
      name: "Sahil",
      age: 41,
      city: "Mangaluru",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.YQGwtpOGecZajkbh2HMMGAHaHa?pid=Api&h=220&P=0",
      profession: "Doctor",
    },
    {
      name: "Hema",
      age: 28,
      city: "Kanour",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.0s8yxkJ31PLoWhy-bbL9GwHaJb?pid=Api&h=220&P=0",
      profession: "Doctor",
    },
    {
      name: "Arman",
      age: 26,
      city: "Delhi",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.ueWoSOP2NBNORHxxLiuXxQHaHa?pid=Api&h=220&P=0",
      profession: "Doctor",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {users.map((u, i) => (
          <ProfileCard key={i} {...u} />
        ))}
      </div>
    </>
  );
}

export default App;
