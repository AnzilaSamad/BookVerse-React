import axios from "axios";
import { useEffect, useState } from "react";


function Token() {

  const [reftoken, setReftoken] = useState([])

  const handleApi = () => {
    var data = new FormData();
    data.append('grant_type', 'password');
    data.append('client_id', '3MVG9gtDqcOkH4PIVuZZFAMpxzBH2acIbUQ1Ep7eP1WeU._GokMAqlZlbWh6OnhuFVeBVSkwgjJg0fP7FooM4');
    data.append('client_secret', '073E0DB8330BABA40277EE28C7FBFD30CB05286FAA2B37495D59172217034119');
    data.append('username', 'ajayachandran@suyati.com.team3');
    data.append('password', '@bhiramiJ0321tr4EANTVHCt2qah5xljqJCigI');


    // var  postData={  
    //     "grant_type":"password",
    //     "client_id":"3MVG9gtDqcOkH4PIVuZZFAMpxzBH2acIbUQ1Ep7eP1WeU._GokMAqlZlbWh6OnhuFVeBVSkwgjJg0fP7FooM4",
    //     "client_secret":"073E0DB8330BABA40277EE28C7FBFD30CB05286FAA2B37495D59172217034119",
    //     "username":"ajayachandran@suyati.com.team3",
    //     "password":"@bhiramiJ0321tr4EANTVHCt2qah5xljqJCigI"
    // }

    //   axios.post ('https://Login.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG9gtDqcOkH4PIVuZZFAMpxzBH2acIbUQ1Ep7eP1WeU._GokMAqlZlbWh6OnhuFVeBVSkwgjJg0fP7FooM4&client_secret=073E0DB8330BABA40277EE28C7FBFD30CB05286FAA2B37495D59172217034119&username=ajayachandran@suyati.com.team3&password=@bhiramiJ0321tr4EANTVHCt2qah5xljqJCigI',
    //   {
    //  headers: {
    //      "Content-Type": "multipart/form-data",
    //      "Access-Control-Allow-Origin" : "*"

    //  }
    //  })

    //   axios.post ('https://Login.salesforce.com/services/oauth2/token', Object.keys(postData).map(function (key) { return encodeURIComponent(key) + '=' + encodeURIComponent(postData[key]) }).join('&'),
    //   {
    //      headers: {
    //          "Content-Type": "application/x-www-form-urlencoded"
    //      }
    //  })

    // const params = JSON.stringify({

    //                   "grant_type": "password",
    //                   "username": "ajayachandran@suyati.com.team3",
    //                   "password": "@bhiramiJ0321tr4EANTVHCt2qah5xljqJCigI",
    //                   "client_id": "3MVG9gtDqcOkH4PIVuZZFAMpxzBH2acIbUQ1Ep7eP1WeU._GokMAqlZlbWh6OnhuFVeBVSkwgjJg0fP7FooM4",
    //                   "client_secret": "073E0DB8330BABA40277EE28C7FBFD30CB05286FAA2B37495D59172217034119"

    //   });

    //   axios.post('https://login.salesforce.com/services/oauth2/token', params,  {
    //               headers: {
    //                   "Content-Type": "multipart/form-data",

    //               },
    //           }
    //       )
    axios.post("https://login.salesforce.com/services/oauth2/token", data, {
      headers: {
        "Content-Type": "Multipart/form-data"
      }
    })
      .then((Response) => {
        console.log(Response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    handleApi();
  }, []);

}
export default Token;