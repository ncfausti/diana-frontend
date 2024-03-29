//import RefData from './RefData';
import auth from './auth';
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
        makeCorsRequest(formData={},method="GET", path, callback) {
          // This is a sample server that supports CORS.
          let jsonFormat = '?format=json';
          let limit = '';

          if (formData.limit)
            limit = "&limit=" + formData.limit;

          if (formData.name && formData.submission) 
            jsonFormat = '';

          var url = 'http://104.197.191.63/' + path + jsonFormat + limit;

          var xhr = this.createCORSRequest(method, url);

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
      //      console.log(e);
            alert('Woops, there was an error making the request.');
          };
          if (auth.getToken())
            xhr.setRequestHeader('authorization', 'token ' + auth.getToken());
            
          var data = new FormData();

          // POST login
          if (formData.email && formData.pass) {
            data.append("email", formData.email );
            data.append("password", formData.pass );
          }

          // POST submission decision
          if (formData.decision && formData.submission) {
            data.append("decision", formData.decision);
            data.append("submission", formData.submission);
          }

          //  POST tag
           if (formData.name && formData.submission) {
            data.append("name", formData.name);
            data.append("submission", formData.submission);
          }

       //   console.log('sending')
       //   xhr.setRequestHeader("Cache-Control", "no-cache");
          xhr.send(data);
        }

}