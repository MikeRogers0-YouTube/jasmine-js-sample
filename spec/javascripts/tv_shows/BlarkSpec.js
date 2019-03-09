describe("Blark", function() {
  var blark;

  beforeEach(function() {
    blark = new Blark();
  });

  describe("#sayHi", function(){
    it("returns Hi Son", function(){
      expect(blark.sayHi()).toEqual("Hi Son")
    })
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
