module.exports = {
	RandomChar: function(num){
	    var string ="abcdefghijklmnopqustuvwxyz0123456789";
	    var str = '';
	    var i = 0;
	    while(i<num){
	        str += string.charAt(Math.floor(Math.random()*string.length));
	        i++;
	        if(i%150 == 0) str+= "<br/>";
	    }
	    return str;
	}
}