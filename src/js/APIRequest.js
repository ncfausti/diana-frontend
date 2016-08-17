//import RefData from './RefData';

export default class APIRequest {
        // Authorization token a0f4544b9c2d086b6fcaf1274842c601bcc37c3b
        // 104.197.191.63/api/status

        createCORSRequest(method, url) {
          var xhr = new XMLHttpRequest();
          if ("withCredentials" in xhr) {
            // XHR for Chrome/Firefox/Opera/Safari.
            xhr.open(method, url, true);

          } else if (typeof XDomainRequest != "undefined") {
            // XDomainRequest for IE.
            xhr = new XDomainRequest();
            xhr.open(method, url);
          } else {
            // CORS not supported.
            xhr = null;
          }
       //   xhr.setRequestHeader("authorization", "token a0f4544b9c2d086b6fcaf1274842c601bcc37c3b");

          return xhr;
        }


        // Make the actual CORS request.
        makeCorsRequest(callback) {
          // This is a sample server that supports CORS.
          var url = 'http://104.197.191.63/api/status/?format=json';
          var xhr = this.createCORSRequest('GET', url);
   //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          if (!xhr) {
            alert('CORS not supported');
            return;
          }
          xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                  callback(this.responseText);
                }
          });

          xhr.onerror = function(e) {
            console.log(e);
            alert('Woops, there was an error making the request.');
          };
          xhr.setRequestHeader('authorization', 'token 5e8e47cd94c9a982ce57b64b8df0fff6eac54c87');

        //  xhr.setRequestHeader("Cache-Control", "no-cache");
          xhr.send();
        }

}