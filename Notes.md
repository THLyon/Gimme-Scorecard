__TO-DO__
- Move backend to Typescript
- Get Menu items loading in DOM container
- Favorites Functionality
- Sign-up/Sign-in Functionality
- Database Functionality
- Settings Functionality


__TO-DO LONG TERM__
- Check on API costs
- Figure out AWS/Serving aspects for deployement

__STYLING NOTES__



__TO CONSIDER__
- prefetching data or using local cache to minimize time to fetch leaderboard data



        // "resources": [
        //   "dist/tournamentDetails.html",
        //   "dist/popup.html",
        //   "dist/tournamentDetails.css",
        //   "dist/index.css", 
        //   "dist/index.bundle.js", 
        //   "dist/tournamentDetails.bundle.js", 
        //   "dist/contentLoader.bundle.js",
        //   "dist/leaderboard.js", 
        //   "dist/leaderboard.css"
        // ],


Where I am at before garage cleanup: 

- leaderboard details bundle is not populating 
        -could be manifest
        -could be webpack 
        -could be tree shaking 
-look into contentloading
-copy content loader and various ts files to transfer back to the original 
-Id like to populate original as this is struggling to work 
