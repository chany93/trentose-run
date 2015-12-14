/* your code should go here */




var RunModel = {
      
    init : function() {
        this.data = data;
    
    },
    
    filterPro : function(){
        console.log("pro")
      var indici = [];  
        for(var i = 0; i < data.length; i++){
            
            if (data[i].category == "pro"){
                indici.push(i);
            };
            if (indici.length == 3){
                break;
            };
        }
        
        return indici;
    },
    
    filterAmateur : function(){
        console.log("amator")
        var indici = []; 
        for(var i = 0; i < data.length; i++){
            
            if (data[i].category == "amateur"){
                indici.push(i);
            };
            if (indici.length == 3){
                break;
            };
        }
        console.log(indici);
        return indici;
    }
    
    
      
};


var RunControl = {
    
    init : function() {
        RunModel.init();
        RunView.init();
    },
    

    
    filterPro : function(){
        return RunModel.filterPro();
    },
    
    filterAmateur : function(){
        return RunModel.filterAmateur();
    }
      
};

var RunView = {
    
    init : function() {
       
        var self = this;
//        var data = RunControl.allData();
//        console.log(data);
        var indici = [0,1,2];
        this.renderTop(indici);
        this.renderRest()
        
        
            
            
        $("#btn-filter").on("click", function(){
            var category = $(".selectedCategory").find(":selected").text();
            console.log("selected")
            if(category == " Professional"){
                
                $("#top-selfiers").empty();
                $("#selfiers").empty();
                var indici = RunControl.filterPro();
                self.renderTop(indici);
                
            }
            
            if(category == " Amateur"){
            $("#top-selfiers").empty();
                $("#selfiers").empty();
                var indici = RunControl.filterAmateur();
                self.renderTop(indici);
                
            }
            
            if(category == " All categories"){
                $("#top-selfiers").empty();
                $("#selfiers").empty();
                self.init();
                
            }
        });
        
    },
     
    renderTop : function(indici) {
        
        for(var i = 0; i < 3; i++){   
            
            var tmpl ="<li>" + 
              "<div class='selfie'>" +
                "<img src=" + data[indici[i]].pic + ">" +         
              "</div>" +
              "<div class='stats'>" +   
                "<h2>" + data[indici[i]].name + "<small> " + data[indici[i]].category + "</small></h2>" + 
                "<strong> Time </strong> "  + data[indici[i]].time +  
                "<strong> Selfies </strong> " + data[indici[i]].sefies +     
              "</div>" +  
              "<div class='badge'>" +  
                "#" + (i+1) + 
              "</div>" + 
            "</li>"  
              
              $("#top-selfiers").append(tmpl);
              
            
        }
    },
    
    renderRest : function() {
       
     for(var i = 3; i < data.length; i++){
         
         var tmpl =  "<li>" + 
          "<div> " + data[i].name + "(" + data[i].category + ")</div>" +  
          "<div> " +    
            "<strong>Time</strong> " + data[i].time + 
          "</div>" + 
          "<div>" +   
            "<strong>Selfies</strong> " + data[i].sefies +    
          "<div>" + 
          "<div>" +  
            "<strong> #" + (i+1) + "</strong>" +   
          "</div>" +    
      "</li>" 
         
         $("#selfiers").append(tmpl);
         }
    }
    
};



$(document).ready(function(){
  
  
    RunControl.init();
    
    
});







