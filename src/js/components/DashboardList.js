import React from 'react';

export default class DashboardList extends React.Component {
	render() {
		let self = this;

      return (
        React.createElement("ul", null, Object.keys(self.props.list).map(function(k){
        		/*
  
        	let getFullName = function(key) {
        		let fullName = {
					A1: "Injection",
					A2: "Broken Authentication and Session Management (XSS)",
					A3:	"Cross Site Scripting (XSS)",	
					A4:	"Insecure Direct Object References",
					A5:	"Security Misconfiguration",
					A6:	"Sensitive Data Exposure",
					A7:	"Missing Function Level Access Control",
					A8:	"Cross Site Request Forgery (CSRF)",
					A9:	"Using Components with Known Vulnerabilities",
					A10: "Unvalidated Redirects and Forwards",
					S1:"",
					S12:"",
					S14:"",
				}
	
				if (key in fullName)  {	
					
					return fullName[key]; 
				}
				else { return ""; }
			}
           	return React.createElement("li", null, listValue + " " + getFullName(listValue));
				*/
           	return React.createElement("li", null, (<span><span class="dash-list-name">{k}</span><span class="dash-list-val">{self.props.list[k]}</span></span>) );

             })
            )  // /create ul
        )
	}
}