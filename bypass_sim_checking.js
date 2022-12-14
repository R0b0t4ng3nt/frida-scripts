setTimeout(function() { 

	Java.perform(function() {
		
		const sm = Java.use("android.telephony.SubscriptionManager");
		const si = Java.use("android.telephony.SubscriptionInfo");
		const bm = Java.use("android.graphics.Bitmap");
	    	const bmc = Java.use("android.graphics.Bitmap$Config");
		const bmcv = bmc.ARGB_8888; 
		var bmi = bm.createBitmap(1,2,bmcv.value);
		
		sm.getActiveSubscriptionInfoList.overload().implementation = function () {		
			console.log("");
			console.log("[*] Hooking getActiveSubscriptionInfoList");
			console.log("[*] Instantiating SubscriptionInfo");
			var arl = Java.use("java.util.ArrayList").$new();
			var icc = Java.use("java.lang.String").$new("00000000000000000000"); // iccid 
			var dname = Java.use("java.lang.String").$new("Carrier display name"); // carrier name
			var cname = Java.use("java.lang.String").$new("Carrier name"); // carrier name
			var number = Java.use("java.lang.String").$new("phone-number"); // format: <countrycode-number> e.g. 910000000000
			var ciso = Java.use("java.lang.String").$new("in"); // countryIso e.g. in for India
			var cs = Java.use("java.lang.String").$new("bla"); // cardString
			var sii = si.$new(1,icc,1,dname,cname,0,-16746133,number,0,bmi,405,874,ciso,false,null,cs);
			arl.add(sii);
			console.log("[*] Hooking Complete");
			console.log("");
			return arl;
		}

	});   
}, 0);
