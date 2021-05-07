# The GitHub App

## Table of Contents

- [Description](#description)
- [Steps to install](#installation)
- [Technologies Used](#technologies_used)
- [Unsafe header browser error](#unsafe_header)


## Description <a name = "description"></a>
The GitHub App makes use of the <a href = "https://docs.github.com/en/rest" target="_blank" rel="noreferrer" >GitHub API</a> to display user information based on the searched username . Along with the user infromation the application displays a list of repositories belonging to the user in decreasing order of their star rating . In addition to this , on clicking the name of the repository the user can view complete the detailed information of the repository which includes the description , stars , languages and visiting link in a popup. The app has been developed using React - JS and Redux .

## Steps to install <a name = "installation"></a>
On your local pc use the commond 
 ### `npm install`
To run the app on your local pc use the command
 ### `npm start`
 
## Technologies Used  <a name = "technologies_used"></a>
The GitHub App is built using React-JS , Redux , and Axios .
 
## Unsafe header browser error <a name = "unsafe_header"></a>
In the chrome and safari browsers users may come across the error "Refused to set unsafe header "User-Agent". This is because the GitHub Api rejects any request without a User-Agent header < a href = "https://docs.github.com/en/rest/overview/resources-in-the-rest-api#user-agent-required" >(read here)</a> . However chrome and safari do not allow manual setting of the user-agent header and set their own user-agent header hence the error refused to set unsafe header occurs.
 
 
 
 
 

