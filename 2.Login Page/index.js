/**                                                  Web Storage                                                   */
/**
 * 
 * Using the web storage you can Store local data in the web browser which you can access any time.
 * The data is stored using the key and value pair
 * The web storage limit is far larger than the cookies And the web storage information never transferred to the server
 * local storage is for origin its mean for per domain and protocol
 * All pages in the one origin can Store and access all data in the web storage
 * 
 * The web storage provide to objects for storing data in the client Browser
 *  window.localStorage
 *  window.sessionStorage
 * 
 * Using localstorage you can store data with no expiration date.
 * And the session storage store data for a specific session
 * it means if you close your browser tab then the data will have been lost
 */


let txtuser = document.querySelector(".txtuser");
let txtpass = document.querySelector(".txtpass");
let submit = document.querySelector(".submit");


if(window.localStorage) {
    // console.log("Supported...!");

    // store data using key and value pairs
    localStorage.setItem("user", "queryravindra");
    localStorage.setItem("pass", "@123456");

    let user = localStorage.getItem("user");
    let pass = localStorage.getItem("pass");

    let message = document.querySelector(".message");

    submit.addEventListener("click", () => {
        if(user == txtuser.value && pass == txtpass.value) {
            message.innerHTML = "Login Successfulll....!";
        } else {
            message.innerHTML = "Username or Password is Invalid";
        }
    })

} else {
    console.log("Not Supported....!");
}