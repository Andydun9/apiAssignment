 // initial array of sports
 var sports = ["hocky", "soccer"];
 
 // $("#sports-input").click(function(){
 // $("#sports-input").push(sports)
 
 // })
         
 
         //inputs.push($("usrInputElementId").val())
 
             function renderButtons() {
                 $("#search-view").empty();
 
                 // looping through sports
 
                 for (var i = 0; i < sports.length; i++) {
 
                     var a = $("<button>");
                     a.addClass("sport-input");
                     a.attr("data-name", sports[i]);
                     a.text(sports[i]);
                     $("#search-view").append(a);
                    
                 }
             }
 
             $("button").click(function(event){
                 event.preventDefault();
 
                 var sport = $("#sports-input").val().trim();
 
                 sports.push(sports);
 
                 renderButtons();
             });
 
             renderButtons();
             
 
 
 // adding giphs 
 
  $("button").click(function(){
     var sports = $(this).attr("data-name");
 
 var queryURL= "https://api.giphy.com/v1/gifs/search?q=" +
 sports + "&api_key=zb0xNVFJspwOiB4l8b0Ow13KnlOrX7Ki&limit=10"
 
 $.ajax({
     url: queryURL,
     method: "GET"
 })
 
 .then(function(response){
     console.log(queryURL);
     console.log(response);
 
     var results = response.data;
 
 // looping through each result
     for (var i=0; i<results.length; i++){
           var sportsDiv= $("<div>");
 
       
         
 
         var sportsImage= $("<img>");
         sportsImage.attr("src", results[i].images.fixed_height.url);
        
        sportsDiv.append(sportsImage);
       sportsImage.addClass("hockey")
 
         $(".gifs-appear-here").prepend(sportsDiv);
 
         console.log("sports image "+ sportsDiv)
     }
 
  //starts and stops gifs
     $(".hockey").click(function(){
     var state= $(this).attr("data-state");
     if (state==="still"){
         $(this).attr("src", $(this).attr("data-animate"))
         $(this).attr("data-state", "animate");
     }
     else{
         $(this).attr("src", $(this).attr("data-still"))
         $(this).attr("data-state", "still")
     }
 })
 })
 
 
 
 
 
  })