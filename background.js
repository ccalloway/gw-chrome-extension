// on window create (or browser start) we open tab to pm receiver
chrome.windows.onCreated.addListener(function(w) {
  //chrome.tabs.query({'active': true}, function(tabs) {
    //setTimeout(function() { 
    chrome.windows.get(w.id, { "populate": true }, function(w) {
      chrome.tabs.update(w.tabs[0].id, { "url": "http://www.elmundodigital.net"})

      f = function(tab_id) {
        var counter = 0

        setInterval(function() {

          
          chrome.tabs.reload(tab_id, { }, function() { })

        }, 10000)
      }
      f(w.tabs[0].id)
      return 

      chrome.tabs.onUpdated.addListener(function(id, changed, tab) {

        // remove all existing cookies
        // TODO: we will need to target only flash related cookies - 
        // maybe figure out a way of determining which cookies have
        // since been added
        chrome.cookies.getAll({}, function(cookies) {
          for(var i = 0; i < cookies.length; i++) {
            chrome.cookies.remove({
              url: "http://" + cookies[i].domain + cookies[i].path, 
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