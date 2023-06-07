![Logo](https://github.com/DJFancyAl/Travel-Blog/assets/104106586/2b361142-ef0a-4eb9-a24c-c587c0da1486)

# MileStone Travel Blog

Our Blog site is for the niche who likes to travel the world and share their experience with other travelers around the world.

## Tech Stack

**Client:** React, Bootstrap

**Server:** MongoDB, Express, Node

## Features

- **Responsive**

![rshoth](https://github.com/DJFancyAl/Travel-Blog/assets/104106586/be56dc5a-1190-4ebc-94c3-93f821b41b68)

![rshotv](https://github.com/DJFancyAl/Travel-Blog/assets/104106586/ff70c031-98b6-46fe-81f4-a582a29076a7)

- **Cross platform**

- **Authentication & Authorization**

The great thing about this application is that it is accessible to anyone! Users have the ability to register for an account, customize their profile, and create original content. After an account is created, the user is able to easily log in and work with their blogs or comments:

![image](https://github.com/DJFancyAl/Travel-Blog/assets/80846699/d896047e-87c0-4c93-a410-6f3b3d243919)

![image](https://github.com/DJFancyAl/Travel-Blog/assets/80846699/fc8299ca-813b-45df-beb0-25c8390870d1)

Upon account registration the user's password is hashed using BCrypt - so the password is always secure and cannot be viewed by another person. When the user logs in - their password is compared to the hashed password to authenticate the user.

For an added layer of security - we used "JSON Web Tokens" for authorization. Basically, the user is assigned a unique web token ID, which must be used when trying to perform functions such as deleting a blog or updating a profile.

Lastly, authenticated users are given options that anonymous users do not have, such as the ability to write a blog or create a comment. This is achieve with simple "if/then" statements that show these options when the user is authenticated.

## Lessons Learned

A hard lesson we learned was, to communicate and Time Management.

## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

## Authors

- **[Albert](https://github.com/DJFancyAl):** BackEnd
- **[Elka](https://github.com/Elka1214):** Content, Home Page
- **[Estaban](https://github.com/ebarroso2214):** BackEnd
- **[Yash](https://github.com/YashxPatel):** FrontEnd

## Credits

#### Creating the Authentication System

- Title: Authentication With JWT Tutorial - React, NodeJS | How To _ Author: (PedroTech)) _ Date: (2021 _ Availability: (https://www.youtube.com/watch?v=KgXT63wPMPc) _

#### Using React Context for Author Data

- Title: React API Reference - useContext Hook _ Author: (Meta)) _ Date: (2023 _ Availability: (https://react.dev/reference/react/useContext) _

#### Images

Belgrade, Servia by [Lonely Planet](https://lp-cms-production.imgix.net/features/2017/09/Belgrade-Knez-Mihailova-street-af958c3aa30c.jpg?auto=format&fit=crop&ar=1:1&q=75&w=1024).

## License

[MIT](https://choosealicense.com/licenses/mit/)
