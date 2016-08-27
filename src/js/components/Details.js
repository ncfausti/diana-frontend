// components/Details.js
import React from 'react'
import Router from 'react-router'
import APIRequest from '../APIRequest'

export default class Details extends React.Component{
  constructor() {
    super()
    this.state = {
    	id:"",
    	details:{
  "id": "0782f085-b796-4b15-9b54-3b7be9fa2b1d",
  "status": "Duplicate",
  "creator": "eee3a8eb-460e-4aea-8db8-d4771726304a",
  "client": "Space X",
  "risk_level": {
    "title": "Low",
    "number_level": 12
  },
  "created": "2016-08-26T00:27:25.968000Z",
  "modified": "2016-08-26T00:27:26.177000Z",
  "payout": null,
  "comment": "This is a sample comment for submission # 106",
  "confidence_score": 100,
  "payload": "<script>payload 106</script>",
  "calculated_payout": "0.00",
  "client_decision": "open",
  "triage_decision": "open",
  "tags": [
    {
      "id": 319,
      "name": "critical"
    },
    {
      "id": 321,
      "name": "johns"
    },
    {
      "id": 320,
      "name": "critical"
    }
  ],
  "comments": [
    {
      "id": "35a8640a-7894-4d14-bced-883ba55f40d4",
      "author": "jacob.kyle+bughunter@gmail.com",
      "text": "sample comment 2",
      "created": "2016-08-26T00:27:26.196000Z",
      "modified": "2016-08-26T00:27:26.196000Z"
    },
    {
      "id": "98928177-1a21-49d0-a568-8123722903c1",
      "author": "jacob.kyle+bughunter@gmail.com",
      "text": "sample comment 1",
      "created": "2016-08-26T00:27:26.194000Z",
      "modified": "2016-08-26T00:27:26.194000Z"
    },
    {
      "id": "796f34d6-deb4-4b35-b408-551682cdd5b0",
      "author": "jacob.kyle+bughunter@gmail.com",
      "text": "sample comment 0",
      "created": "2016-08-26T00:27:26.192000Z",
      "modified": "2016-08-26T00:27:26.192000Z"
    }
  ],
  "requests": [
    "2149e027-1251-494a-aed8-8656a2f1c37b",
    "27bc1cd9-df2a-4f7f-abf3-735c581c082d",
    "2d47c88f-f29f-462e-b104-8c609d6fb0ac"
  ],
  "screenshots": [],
  "vulnerability": {
    "impact": "<p>Allowing arbitrary web pages to frame content can lead to several issues\nincluding phishing attacks and browser exploits.</p>\n",
    "category": "Data Confidentiality",
    "risk_level": "12",
    "description": "<p>The application allows other domains to host the application's content into an\niframe.</p>\n",
    "title": "Cross-Frame Scripting (XFS) and Clickjacking",
    "references": "['https://www.owasp.org/index.php/Cross_Frame_Scripting', 'https://www.owasp.org/index.php/Clickjacking', 'https://support.microsoft.com/en-us/kb/2694329']",
    "recommendation": "<p>There are a number of different ways to prevent clickjacking attacks. The most\nflexible way involves defining a CSP policy. This is a HTTP response header\nwhich contains directives which set security policies on the application. A\nsimple example of a CSP header with a policy to prevent external framing is\nshown below:</p>\n\n<p><code>Content-Security-Policy: child-src 'none';</code></p>\n\n<p>If framing the application is desirable on certain domains, the following header\ncan be used:</p>\n\n<p><code>Content-Security-Policy: child-src https://host1.com https://host2.com;</code></p>\n\n<p>A less-flexible method to mitigate clickjacking is the X-Frame-Options\nheader. An example of this header disallowing all framing is shown\nbelow:</p>\n\n<p><code>X-Frame-Options: DENY</code></p>\n\n<p>An example of only allowing framing on the application's origin is shown below:</p>\n\n<p><code>X-Frame-Options: SAMEORIGIN</code></p>\n",
    "taxonomies": "[{'type': u'wasc', 'value': u'--'}, {'type': u'cwe', 'value': u'--'}, {'type': u'sans', 'value': u'--'}, {'type': u'owasp', 'value': u'--'}]",
    "id": "563b6d6a-ba4e-4a98-b06b-d647026f2dca"
  }
}
    }

  }
  componentWillMount() {
  	let uid = this.props.location.pathname.split('/submissions/')[1];
//	let tempRowDetailCache = this.state.rowDetailCache;
    let tempDetailData = {};

  	let details = {};
        var p1 = new Promise(
          function(resolve, reject)
              {
                new APIRequest().makeCorsRequest({},'GET','api/status/' + uid +'/',
                      function(data) {
                            let detailsResponse = JSON.parse(data);
                           // tempRowDetailCache[detailsResponse.id] = detailsResponse;
                  
                            for (var key in detailsResponse) {
                              tempDetailData[key] = detailsResponse[key];
                            }

                            resolve(detailsResponse );
                      });
                
              }
        )

        let self = this;

        p1.then(
          function(val) {
          	console.log(val)
           self.setState({details:val});
           console.log('this.state')
           console.log(self.state.details);
          }
        )
        .catch(function(reason) {
          console.log(reason)
        });
  }


  handleSubmission(decision) {
    let tempRowData  = this.state.rowData;
    let submissionID = this.state.details.id;

    ///////// api call here ///////////////

    var p1 = new Promise(
      function(resolve, reject)
          {
            new APIRequest().makeCorsRequest({decision:decision, submission:submissionID},'POST','api/user_submission_decisions/',
                  function(data) {
                        let detailsResponse = JSON.parse(data);
                        resolve(detailsResponse);
                  });
            
          }
    )

    	let self = this;

	    p1.then(
	      function(val) {
	       console.log(val)
	      }
	    )
	    .catch(function(reason) {
	    //  console.log(reason)
	    });
 	}

  render() {
    return (
    	<div class="row">
    	<div class="col-lg-2"></div>
    	<div class="col-lg-5">
    	<div>Bug ID: {this.state.details.id.substr(this.state.details.id.length - 4)}</div>
    	<div class="inline-block">{this.state.details.status}</div>
    	<div class="inline-block">{this.state.details.vulnerability.category}</div>
    	<div class="inline-block">{this.state.details.vulnerability.title}</div>
    	<div class="inline-block">{this.state.details.confidence_score}%</div>

    	<div>{this.state.details.client}</div>
    	<div >{this.state.details.vulnerability.title}</div>
    	<div>{this.state.details.risk_level.title}</div>
    	<div class={"detail-risk-"+this.state.details.risk_level.title}>{this.state.details.risk_level.title} Risk Level</div>
    	<div>{this.state.details.risk_level.number_level}</div>
    	<div>{this.state.details.vulnerability.impact}</div>
    	<div>{this.state.details.vulnerability.risk_level}</div>
    	<div>{this.state.details.vulnerability.description}</div>
    	<hr></hr>

    	<div>{this.state.details.vulnerability.references}</div>
    	<hr></hr>
    	<div>{this.state.details.vulnerability.recommendation}</div>
    	<hr></hr>

    	<div>{this.state.details.vulnerability.taxonomies}</div>
    	</div>
    	<div class="col-lg-3">
    	<span>Bounty: </span><span class="details-bounty-input">{this.state.details.calculated_payout}</span>
    	<hr></hr>
    	<button class="btn btn-primary detail-btn" value="approved" onClick={this.handleSubmission.bind(this)}>Accept</button>
		<button class="btn btn-danger detail-btn" value="rejected" onClick={this.handleSubmission.bind(this)}>Reject</button>

    	</div>
    	<div class="col-lg-2"></div>

    	</div>
    )
  }
}