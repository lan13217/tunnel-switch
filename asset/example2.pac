function FindProxyForURL(url, host)
{
    url = url.toLowerCase();
    host = host.toLowerCase();
    
    
    var site_list2 = [
        'sf-express.com'
    ];
    for(var index = 0;index<site_list2.length;index++){
         if(host==site_list2[index] ||
             shExpMatch(host, "*." + site_list2[index])){
            return "DIRECT";
         }
    }
    
    // whole site
    var site_list = [
        ,'blogger.com'
        ,'blogspot.com'
        ,'bit.ly'

        ,'feedburner.com'
        ,'flickr.com's
        ,'friendfeed.com'
        ,'facebook.com'
        ,'facebook.net'
        ,'fbcdn.net'

        ,'ggpht.com'
        ,'goo.gl'
        ,'google.com'
        ,'google.cn'
        ,'google.com.hk'
        ,'google.com.tw'
        ,'googleusercontent.com'
        ,'googleapis.com'

        ,'t.co'
        ,'twitgoo.com'
        ,'twitter.com'
        ,'twitpic.com'
        ,'twimg.com'
        ,'tweetphoto.com'

        ,'wordpress.com'

        ,'youtube.com'
        ,'ytimg.com'
		
        ,'chinagfw.org'
        ,'solutions.asia'
        ,'gstatic.com'
        ,'wirelesshack.org'

        ,'winterbe.com'
        ,'quartz-scheduler.org'
        ,'angularjs.org'
        ,'jsbin.com'
        ,'gist.github.com'
    ];
    
    var exp_list = [ ];

    for(var index = 0;index<site_list.length;index++){
         if(host==site_list[index] ||
             shExpMatch(host, "*." + site_list[index])){
            return "SOCKS5 127.0.0.1:8087";
         }
    }
    for(var index = 0;index<exp_list.length;index++){
        var re = new RegExp(exp_list[index]);
        if(url.match(re)){
            return "SOCKS5 127.0.0.1:8087";
        }
    }
	
    // whole site
    //return "DIRECT";

    //Ad
    var site_list3 = [
        'doubleclick.net'
        ,'cbjs.baidu.com'
        ,'allyes.com.cn'
        ,'cpro.baidustatic.com'
        ,'pos.baidu.com'
    ];
    for(var index = 0;index<site_list3.length;index++){
         if(url.indexOf(site_list3[index])>-1){
            return "SOCKS5 127.0.0.1:123";
         }
    }

    return "DIRECT";
	//return "SOCKS5 10.0.13.79:1080";
}
