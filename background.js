// on window create (or browser start) we open tab to pm receiver
chrome.windows.onCreated.addListener(function(w) {
  //chrome.tabs.query({'active': true}, function(tabs) {
    //setTimeout(function() { 
    chrome.windows.get(w.id, { "populate": true }, function(w) {
      //chrome.tabs.update(w.tabs[0].id, { "url": "http://www.elmundodigital.net"})

      chrome.tabs.onUpdated.addListener(function(id, changed, tab) {
        chrome.cookies.getAll({domain: "whatarecookies.com"}, function(cookies) {
          for(var i = 0; i < cookies.length; i++) {
            chrome.cookies.remove({
              url: "http://www.whatarecookies.com" + cookies[i].path, 
              name: cookies[i].name
            
            }, function(details) {
              //alert(details)
            });

          }
        })

      })


    })
    //}, 5000)
    //win.tabs.update(0, {url: 'http://www.elmundodigital.net'});
  //});

})