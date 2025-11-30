# React + Vite

- Created a React + vite application for DevConnect frontend implementation
- CORS added CORS in Backend and added middleware with origin configuration
- added react-redux toolkit to implement react store 
- added slices for different use cases for configured store
- added NavBar update as soon as user log in 
- Refactored code to add add constants file + created a component folder
- implemented check for token to see if user is logged in or not if not then redirect to login page 
- added feed in the store 
- build the user card and implemented real time profile update available to user to see the changes parallel  
- show toast message on updating profile successfully  
- connections to see all the connections user have 
- feature to see all connection requests
- feature to accept/reject connection request
- send/ignore the user card from feed
- added dynamic toast feature for login and sign up form 
- feature added to remove users from feed (created feed Slice in app store to manage feed)

Body
    NavBar
    Route = '/' => feed
    Route = '/login' => login
    Route = '/connections' => connections
    Route = '/profile' => profile