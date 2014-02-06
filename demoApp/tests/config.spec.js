describe("Configuration Setup",function(){
	it("should load local configuartion",function(){
		var config=require('../config')();
		expect(config.mode).toBe('dev');	
	})
	it("should load qa configuartion",function(){
		var config=require('../config')('qa');
		expect(config.mode).toBe('qa');	
	})
	it("should load production configuartion",function(){
		var config=require('../config')('prod');
		expect(config.mode).toBe('prod');	
	})
})