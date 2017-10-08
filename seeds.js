var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [{
    
    name: "Cloud's Rest",
    image: "https://farm3.staticflickr.com/2054/2229707213_302c00f6b5.jpg",
    description: "Bacon ipsum dolor amet salami sausage shankle fatback rump swine. Pig salami andouille sirloin drumstick, porchetta boudin picanha beef capicola doner short ribs kevin tenderloin. T-bone alcatra ham, beef ribs jerky ribeye strip steak kielbasa meatloaf chicken. Burgdoggen turducken t-bone biltong kielbasa shoulder venison. Turducken capicola ham hock landjaeger boudin andouille. Shank jowl brisket salami rump kevin pig cow ribeye cupim pork belly, prosciutto short loin ball tip kielbasa."
    
    },
    {
    
    name: "Granite Peaks",
    image: "https://farm4.staticflickr.com/3221/5710775718_bfd8078fb7.jpg",
    description: "Bacon ipsum dolor amet salami sausage shankle fatback rump swine. Pig salami andouille sirloin drumstick, porchetta boudin picanha beef capicola doner short ribs kevin tenderloin. T-bone alcatra ham, beef ribs jerky ribeye strip steak kielbasa meatloaf chicken. Burgdoggen turducken t-bone biltong kielbasa shoulder venison. Turducken capicola ham hock landjaeger boudin andouille. Shank jowl brisket salami rump kevin pig cow ribeye cupim pork belly, prosciutto short loin ball tip kielbasa."
    
    },
    {
    
    name: "Big Sky Rest",
    image: "https://farm8.staticflickr.com/7179/6927088769_cc14a7c68e.jpg",
    description: "Bacon ipsum dolor amet salami sausage shankle fatback rump swine. Pig salami andouille sirloin drumstick, porchetta boudin picanha beef capicola doner short ribs kevin tenderloin. T-bone alcatra ham, beef ribs jerky ribeye strip steak kielbasa meatloaf chicken. Burgdoggen turducken t-bone biltong kielbasa shoulder venison. Turducken capicola ham hock landjaeger boudin andouille. Shank jowl brisket salami rump kevin pig cow ribeye cupim pork belly, prosciutto short loin ball tip kielbasa."
    
    }
]


function seedDB(){
    // remove all campgrounds
    Campground.remove({}, function(err){
        if(err) {
            console.log(err);
        }
            console.log("removed campgrounds!"); 
            // add a few campgrounds
            data.forEach(function(seed){
               Campground.create(seed, function(err, campground){
                   if(err) {
                     console.log(err);
                   } else {
                     console.log("added a campground!");
                     Comment.create(
                         {
                             text: "This place was great but there was no internet.",
                             author: "Homer"
                         }, function(err, comment) {
                             if(err) {
                                 console.log(err);
                             } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new comment!");
                            }
                         }
                    );
                   }
               }); 
            });
                // add a few comments
    });  
}

module.exports = seedDB;




