describe("Blark", function() {
  var blark;

  beforeEach(function() {
    blark = new Blark();
  });

  describe("#sayHi", function(){
    it("should with parenting being true returns Hi Son", function(){
      blark.startParenting();
      expect(blark.sayHi()).toEqual("Hi Son")
    })
    it("should with parenting being false returns gary", function(){
      blark.stopParenting();
      expect(blark.sayHi()).toEqual("gary");
    });
  });

  describe("#startParenting", function(){
    it("Starts parenting", function(){
      blark.startParenting();
      expect(blark.isParenting).toEqual(true);
    });
  });

  describe("#stopParenting", function(){
    it("Stops parenting", function(){
      blark.stopParenting();
      expect(blark.isParenting).toEqual(false);
    });
  });


});
