const db = require('../models')
db.Blog.create({
    title: 'Lucky Trip To LA',
    author: 'Esteban Barroso',
    body: `My list of recommendations for LA would be to visit these spots in this order Eaton Canyon, Hollywood Trail (Griffith Park), Hollywood Blvd, Santa Monica Piers, Griffith Observatory, LA Museum of Art, Hollywood Bowl, Grand Central Market, Venice Beach, The Grove, Malibu State Park, El Matador`
})

.then(()=>{
    console.log('success')
})
.catch(err => {
    console.log('failure',err)
    process.exit()
})