describe("Coach", function() {
    describe("start", function(){
       it("should return true or false ", function(){
            expect(Coach.start("easy")).toEqual(true);
            expect(Coach.start("normal")).toEqual(true);
            expect(Coach.start("crazy")).toEqual(true);
            expect(Coach.start("ciao")).toEqual(false);
        }); 
    });
   
    describe("track", function(){
        it("should give you the total calories of walk", function(){
        Coach.start("easy");
        expect(Coach.track("walk", 2)).toEqual(100);
        expect(Coach.track("asdas", 2)).toEqual(null);
            
    });
         it("should give you the total calories of bike", function(){
            Coach.start("normal");
            expect(Coach.track("bike", 3)).toEqual(300);
            expect(Coach.track("asdas", 2)).toEqual(null);
            
    });
         it("should give you the total calories of run", function(){
            Coach.start("crazy");
            expect(Coach.track("run", 1)).toEqual(150);
            expect(Coach.track("asdas", 2)).toEqual(null);
            
    });
    });
    
    describe("checkProgess", function(){
        it("should return progress in integers", function(){
            Coach.start("normal");
            Coach.track("bike", 3);
            Coach.track("walk", 2)
            expect(Coach.checkProgress()).toEqual(40);  
        });
    })

});
