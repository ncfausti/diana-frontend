export default class RefData {}

RefData.DETAILS = {}

RefData.STATUS = [
  {
    "id": "01e1c635-7862-4482-ac45-03fe27803fb8",
    "status": "Verified",
    "creator": "06fd593f-231c-4e68-b6bc-7abd13041f47",
    "vulnerability": {
      "title": "Cross Site Request Forgery",
      "description": "Cross-site request forgery (CSRF) exploits the stateless nature of HTTP. In the simplest case, an attacker posts an â€œimageâ€ link on an online forum, and entices the victims to visit the forum (through marketing email or an interesting post). The link is actually an HTTP GET handler on the targeted application that performs some malicious operation. If the victim happens to be authenticated to the application, the browser will make the request on behalf of the victim and send the session cookies along with the request. To the targeted application, the request seems legitimate because the cookie values are valid, and therefore the application processes a request that was not intended by the victim."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Low",
      "number_level": 1
    },
    "created": "2016-08-13T21:09:45.613000Z",
    "modified": "2016-08-13T21:09:45.676000Z",
    "payout": null,
    "comment": "This is a sample comment for submission # 3",
    "confidence_score": 100,
    "payload": "<script>payload 3</script>",
    "calculated_payout": "421.12",
    "client_decision": "rejected",
    "triage_decision": "approved",
    "tags": [
      "jens",
      "blog",
      "payment"
    ],
    "comments": []
  },
  {
    "id": "165a9c38-8efa-4240-8e00-5da50cccfd7d",
    "status": "Duplicate",
    "creator": "06fd593f-231c-4e68-b6bc-7abd13041f47",
    "vulnerability": {
      "title": "Clickjacking",
      "description": "The application allowed other domains to host the applicationâ€™s content into an iframe."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Low",
      "number_level": 1
    },
    "created": "2016-08-13T21:09:45.248000Z",
    "modified": "2016-08-13T21:09:45.400000Z",
    "payout": null,
    "comment": "This is a sample comment for submission # 0",
    "confidence_score": 100,
    "payload": "<script>payload 0</script>",
    "calculated_payout": "666.44",
    "client_decision": "approved",
    "triage_decision": "approved",
    "tags": [
      "payment",
      "blog",
      "important"
    ],
    "comments": []
  },
  {
    "id": "2293cce6-f38d-4454-8226-dee59e641dc0",
    "status": "Duplicate",
    "creator": "06fd593f-231c-4e68-b6bc-7abd13041f47",
    "vulnerability": {
      "title": "Clickjacking",
      "description": "The application allowed other domains to host the applicationâ€™s content into an iframe."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Low",
      "number_level": 1
    },
    "created": "2016-08-13T21:09:45.991000Z",
    "modified": "2016-08-13T21:09:46.058000Z",
    "payout": null,
    "comment": "This is a sample comment for submission # 7",
    "confidence_score": 100,
    "payload": "<script>payload 7</script>",
    "calculated_payout": "666.44",
    "client_decision": "auto_rejected",
    "triage_decision": "approved",
    "tags": [
      "jens",
      "payment",
      "critical"
    ],
    "comments": []
  },
  {
    "id": "6c90b6ca-eec1-4a95-97fd-beec232d2904",
    "status": "Not verified",
    "creator": "06fd593f-231c-4e68-b6bc-7abd13041f47",
    "vulnerability": {
      "title": "Clickjacking",
      "description": "The application allowed other domains to host the applicationâ€™s content into an iframe."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Low",
      "number_level": 1
    },
    "created": "2016-08-13T21:09:45.887000Z",
    "modified": "2016-08-13T21:09:45.956000Z",
    "payout": null,
    "comment": "This is a sample comment for submission # 6",
    "confidence_score": 100,
    "payload": "<script>payload 6</script>",
    "calculated_payout": "666.44",
    "client_decision": "approved",
    "triage_decision": "approved",
    "tags": [
      "jens",
      "important",
      "jens"
    ],
    "comments": []
  },
  {
    "id": "7eb4852b-26d3-40ca-be7a-f8c49012c038",
    "status": "Not verified",
    "creator": "06fd593f-231c-4e68-b6bc-7abd13041f47",
    "vulnerability": {
      "title": "Cross Site Scripting",
      "description": "Cross Site Scripting"
    },
    "client": "Space X",
    "risk_level": {
      "title": "High",
      "number_level": 3
    },
    "created": "2016-08-13T21:09:46.169000Z",
    "modified": "2016-08-13T21:09:46.232000Z",
    "payout": null,
    "comment": "This is a sample comment for submission # 9",
    "confidence_score": 100,
    "payload": "<script>payload 9</script>",
    "calculated_payout": "6723.12",
    "client_decision": "auto_rejected",
    "triage_decision": "approved",
    "tags": [
      "jens",
      "important",
      "jens"
    ],
    "comments": []
  },
  {
    "id": "8f667fc9-d824-4214-8667-338642253a9a",
    "status": "Duplicate",
    "creator": "06fd593f-231c-4e68-b6bc-7abd13041f47",
    "vulnerability": {
      "title": "Cross Site Request Forgery",
      "description": "Cross-site request forgery (CSRF) exploits the stateless nature of HTTP. In the simplest case, an attacker posts an â€œimageâ€ link on an online forum, and entices the victims to visit the forum (through marketing email or an interesting post). The link is actually an HTTP GET handler on the targeted application that performs some malicious operation. If the victim happens to be authenticated to the application, the browser will make the request on behalf of the victim and send the session cookies along with the request. To the targeted application, the request seems legitimate because the cookie values are valid, and therefore the application processes a request that was not intended by the victim."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Low",
      "number_level": 1
    },
    "created": "2016-08-13T21:09:46.091000Z",
    "modified": "2016-08-13T21:09:46.138000Z",
    "payout": null,
    "comment": "This is a sample comment for submission # 8",
    "confidence_score": 100,
    "payload": "<script>payload 8</script>",
    "calculated_payout": "421.12",
    "client_decision": "open",
    "triage_decision": "open",
    "tags": [
      "blog",
      "johns",
      "johns"
    ],
    "comments": []
  },
  {
    "id": "a732f35c-ab6c-438e-8715-6d31a7be3145",
    "status": "Out of scope",
    "creator": "06fd593f-231c-4e68-b6bc-7abd13041f47",
    "vulnerability": {
      "title": "SQL Injection",
      "description": "SQL Injection is an attack technique used to exploit applications that construct SQL statements from user-supplied input. When successful, the attacker is able to change the logic of SQL statements executed against the database. The vulnerability is an input validation issue and occurs when SQL queries are insecurely constructed with user input that has not been properly sanitized. Serious risks can arise when an application trusts input supplied by an attacker that is destined for a back-end database with little or no validation."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Critical",
      "number_level": 4
    },
    "created": "2016-08-13T21:09:45.437000Z",
    "modified": "2016-08-13T21:09:45.505000Z",
    "payout": null,
    "comment": "This is a sample comment for submission # 1",
    "confidence_score": 100,
    "payload": "<script>payload 1</script>",
    "calculated_payout": "521.11",
    "client_decision": "auto_rejected",
    "triage_decision": "approved",
    "tags": [
      "important",
      "jens",
      "payment"
    ],
    "comments": []
  },
  {
    "id": "b49f0dd9-a1c8-40d2-886b-05e94feb845b",
    "status": "Duplicate",
    "creator": "06fd593f-231c-4e68-b6bc-7abd13041f47",
    "vulnerability": {
      "title": "SQL Injection",
      "description": "SQL Injection is an attack technique used to exploit applications that construct SQL statements from user-supplied input. When successful, the attacker is able to change the logic of SQL statements executed against the database. The vulnerability is an input validation issue and occurs when SQL queries are insecurely constructed with user input that has not been properly sanitized. Serious risks can arise when an application trusts input supplied by an attacker that is destined for a back-end database with little or no validation."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Critical",
      "number_level": 4
    },
    "created": "2016-08-13T21:09:45.785000Z",
    "modified": "2016-08-13T21:09:45.851000Z",
    "payout": null,
    "comment": "This is a sample comment for submission # 5",
    "confidence_score": 100,
    "payload": "<script>payload 5</script>",
    "calculated_payout": "521.11",
    "client_decision": "rejected",
    "triage_decision": "approved",
    "tags": [
      "payment",
      "blog",
      "payment"
    ],
    "comments": []
  },
  {
    "id": "bd0414fb-25ca-41a4-9e4a-1ea04739d9a3",
    "status": "Not verified",
    "creator": "06fd593f-231c-4e68-b6bc-7abd13041f47",
    "vulnerability": {
      "title": "TLS/SSL",
      "description": "The server supports the use of the an insecure TLS/SSL cipher. "
    },
    "client": "Space X",
    "risk_level": {
      "title": "High",
      "number_level": 3
    },
    "created": "2016-08-13T21:09:45.713000Z",
    "modified": "2016-08-13T21:09:45.757000Z",
    "payout": null,
    "comment": "This is a sample comment for submission # 4",
    "confidence_score": 100,
    "payload": "<script>payload 4</script>",
    "calculated_payout": "123.32",
    "client_decision": "open",
    "triage_decision": "open",
    "tags": [
      "johns",
      "payment",
      "payment"
    ],
    "comments": []
  },
  {
    "id": "ffb6c37e-f276-4b96-9e62-4e9a3af7cf96",
    "status": "Not verified",
    "creator": "06fd593f-231c-4e68-b6bc-7abd13041f47",
    "vulnerability": {
      "title": "Cross Site Request Forgery",
      "description": "Cross-site request forgery (CSRF) exploits the stateless nature of HTTP. In the simplest case, an attacker posts an â€œimageâ€ link on an online forum, and entices the victims to visit the forum (through marketing email or an interesting post). The link is actually an HTTP GET handler on the targeted application that performs some malicious operation. If the victim happens to be authenticated to the application, the browser will make the request on behalf of the victim and send the session cookies along with the request. To the targeted application, the request seems legitimate because the cookie values are valid, and therefore the application processes a request that was not intended by the victim."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Low",
      "number_level": 1
    },
    "created": "2016-08-13T21:09:45.539000Z",
    "modified": "2016-08-13T21:09:45.577000Z",
    "payout": null,
    "comment": "This is a sample comment for submission # 2",
    "confidence_score": 100,
    "payload": "<script>payload 2</script>",
    "calculated_payout": "421.12",
    "client_decision": "open",
    "triage_decision": "open",
    "tags": [
      "jens",
      "johns",
      "critical"
    ],
    "comments": []
  }
];

