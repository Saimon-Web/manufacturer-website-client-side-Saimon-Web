import { useEffect, useState } from "react"

const Useadmin = (user) => {
    const [admin,setAdmin]=useState(false)

  const [adminLoading,setadminLoading]=useState(true)
const email = user?.email;

   useEffect(()=> {
   
    if (email) {
        
        fetch(`https://pacific-harbor-82020.herokuapp.com/admin/${email}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },      
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.admin)

                 setAdmin(data.admin)
                 setadminLoading(false)
            })
    }  
   },[email])
   return [admin,adminLoading];
        
}
export default Useadmin;