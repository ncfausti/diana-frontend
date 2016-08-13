export default class RefData {}

RefData.FIRST_NAMES = [
        "Sophie", "Isabelle", "Emily", "Olivia", "Lily", "Chloe", "Isabella",
        "Amelia", "Jessica", "Sophia", "Ava", "Charlotte", "Mia", "Lucy", "Grace", "Ruby",
        "Ella", "Evie", "Freya", "Isla", "Poppy", "Daisy", "Layla"
    ];

RefData.LAST_NAMES = [
        "Beckham", "Black", "Braxton", "Brennan", "Brock", "Bryson", "Cadwell",
        "Cage", "Carson", "Chandler", "Cohen", "Cole", "Corbin", "Dallas", "Dalton", "Dane",
        "Donovan", "Easton", "Fisher", "Fletcher", "Grady", "Greyson", "Griffin", "Gunner",
        "Hayden", "Hudson", "Hunter", "Jacoby", "Jagger", "Jaxon", "Jett", "Kade", "Kane",
        "Keating", "Keegan", "Kingston", "Kobe"
    ];

RefData.COUNTRY_CODES = {
        Ireland: "ie",
        Spain: "es",
        "United Kingdom": "gb",
        France: "fr",
        Germany: "de",
        Sweden: "se",
        Italy: "it",
        Greece: "gr",
        Iceland: "is",
        Portugal: "pt",
        Malta: "mt",
        Norway: "no",
        Brazil: "br",
        Argentina: "ar",
        Colombia: "co",
        Peru: "pe",
        Venezuela: "ve",
        Uruguay: "uy"
    };

RefData.COUNTRIES = [
        {country: "Ireland", continent: "Europe", language: "English"},
        {country: "Spain", continent: "Europe", language: "Spanish"},
        {country: "United Kingdom", continent: "Europe", language: "English"},
        {country: "France", continent: "Europe", language: "French"},
        {country: "Germany", continent: "Europe", language: "(other)"},
        {country: "Sweden", continent: "Europe", language: "(other)"},
        {country: "Norway", continent: "Europe", language: "(other)"},
        {country: "Italy", continent: "Europe", language: "(other)"},
        {country: "Greece", continent: "Europe", language: "(other)"},
        {country: "Iceland", continent: "Europe", language: "(other)"},
        {country: "Portugal", continent: "Europe", language: "Portuguese"},
        {country: "Malta", continent: "Europe", language: "(other)"},
        {country: "Brazil", continent: "South America", language: "Portuguese"},
        {country: "Argentina", continent: "South America", language: "Spanish"},
        {country: "Colombia", continent: "South America", language: "Spanish"},
        {country: "Peru", continent: "South America", language: "Spanish"},
        {country: "Venezuela", continent: "South America", language: "Spanish"},
        {country: "Uruguay", continent: "South America", language: "Spanish"}
    ];

RefData.ADDRESSES = [
        '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        '2722 Hazy Turnabout, Burnt Cabins, NY, 14120-5642, US, (917) 604-6597',
        '6686 Lazy Ledge, Two Rock, CA, 92639-3020, US, (619) 901-9911',
        '2000 Dewy Limits, Wacahoota, NF, A4L-2V9, CA, (709) 065-3959',
        '7710 Noble Pond Avenue, Bolivia, RI, 02931-1842, US, (401) 865-2160',
        '3452 Sunny Vale, Pyro, ON, M8V-4Z0, CA, (519) 072-8609',
        '4402 Dusty Cove, Many Farms, UT, 84853-8223, US, (435) 518-0673',
        '5198 Silent Parade, Round Bottom, MD, 21542-9798, US, (301) 060-7245',
        '8550 Shady Moor, Kitty Fork, CO, 80941-6207, US, (303) 502-3767',
        '2131 Old Dell, Merry Midnight, AK, 99906-8842, US, (907) 369-2206',
        '7390 Harvest Crest, Mosquito Crossing, RI, 02957-6116, US, (401) 463-6348',
        '874 Little Point, Hot Coffee, BC, V3U-2P6, CA, (250) 706-9207',
        '8834 Stony Pioneer Heights, Newlove, OR, 97419-8670, US, (541) 408-2213',
        '9829 Grand Beach, Flint, UT, 84965-9900, US, (435) 700-5161',
        '3799 Cozy Blossom Ramp, Ptarmigan, MS, 38715-0313, US, (769) 740-1526',
        '3254 Silver Island Loop, Maunaloa, DE, 19869-3169, US, (302) 667-7671',
        '1081 Middle Wood, Taylors Gut Landing, OR, 97266-2873, US, (541) 357-6310',
        '1137 Umber Trail, Shacktown, NW, X3U-5Y8, CA, (867) 702-6883',
        '9914 Hidden Bank, Wyoming, MO, 64635-9665, US, (636) 280-4192',
        '7080 Misty Nectar Townline, Coward, AB, T9U-3N4, CA, (403) 623-2838',
        '1184 Wishing Grounds, Vibank, NW, X7D-0V9, CA, (867) 531-2730',
        '126 Easy Pointe, Grandview Beach, KY, 40928-9539, US, (502) 548-0956',
        '6683 Colonial Street, Swan River, BC, V1A-9I8, CA, (778) 014-4257',
        '960 Gentle Oak Lane, Shakopee, ND, 58618-6277, US, (701) 327-1219',
        '6918 Cotton Pine Corner, Kenaston, IA, 52165-3975, US, (515) 906-7427',
        '2368 Burning Woods, Ernfold, NY, 11879-9186, US, (646) 819-0355',
        '5646 Quiet Shadow Chase, Tiger Tail, IA, 52283-5537, US, (712) 375-9225',
        '5466 Foggy Mountain Dale, Sweet Home, MT, 59738-0251, US, (406) 881-1706',
        '5313 Clear Willow Route, Amazon, BC, V0S-2S6, CA, (604) 340-7596',
        '7000 Pleasant Autoroute, Spaceport City, UT, 84749-2448, US, (435) 154-3360',
        '8359 Quaking Anchor Road, Gross, BC, V9O-0H5, CA, (250) 985-3859',
        '5143 Amber Deer Hollow, New Deal, ND, 58446-0853, US, (701) 927-0322',
        '6230 Jagged Bear Key, Young, AR, 72337-3811, US, (501) 805-7239',
        '7207 Heather Vista, Devon, WY, 82520-1771, US, (307) 358-7092',
        '9416 Red Rise Place, Spraytown, OK, 73809-4766, US, (580) 867-1973',
        '3770 Golden Horse Diversion, Yelland, IL, 60471-1487, US, (224) 717-9349',
        '4819 Honey Treasure Park, Alaska, NB, E1U-3I0, CA, (506) 656-9138',
        '6187 Round Front, Land O Lakes, AK, 99873-6403, US, (907) 853-9063',
        '9218 Crystal Highway, Pickelville, MT, 59847-9299, US, (406) 076-0024',
        '6737 Bright Quay, Lazy Mountain, KY, 42390-4772, US, (606) 256-7288',
        '237 Merry Campus, Twentysix, SC, 29330-4909, US, (864) 945-0157',
        '446 Fallen Gate Rise, Petrolia, SC, 29959-9527, US, (864) 826-0553',
        '2347 Indian Boulevard, Frisbee, VA, 23797-6458, US, (703) 656-8445',
        '365 Emerald Grove Line, Level, NC, 28381-1514, US, (919) 976-7958',
        '1207 Iron Extension, Klickitat, SC, 29197-8571, US, (803) 535-7888',
        '6770 Cinder Glen, Caronport, OH, 45053-5002, US, (440) 369-4018',
        '7619 Tawny Carrefour, Senlac, NV, 89529-9876, US, (775) 901-6433'];

RefData.IT_SKILLS = ['android', 'css', 'html5', 'mac', 'windows'];

RefData.IT_SKILLS_NAMES = ['Android', 'CSS', 'HTML 5', 'Mac', 'Windows'];

RefData.STATUS = [
  {
    "id": "464b7427-06df-46b5-b1c7-020326802588",
    "status": "Verified",
    "creator": "420f0895-f9cf-4798-851e-bddad16fdb8c",
    "vulnerability": {
      "title": "SQL Injection",
      "description": "SQL Injection is an attack technique used to exploit applications that construct SQL statements from user-supplied input. When successful, the attacker is able to change the logic of SQL statements executed against the database. The vulnerability is an input validation issue and occurs when SQL queries are insecurely constructed with user input that has not been properly sanitized. Serious risks can arise when an application trusts input supplied by an attacker that is destined for a back-end database with little or no validation."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Low",
      "number_level": 1
    },
    "created": "2016-08-11T17:31:48.274000Z",
    "modified": "2016-08-11T17:31:48.335000Z",
    "payout": null,
    "confidence_score": 100,
    "calculated_payout": "521.11",
    "client_decision": "rejected",
    "triage_decision": "approved",
    "tags": [
      "critical",
      "jens",
      "important"
    ]
  },
  {
    "id": "7ac0f8e4-54d9-4b38-984f-5948efe9116c",
    "status": "Not verified",
    "creator": "420f0895-f9cf-4798-851e-bddad16fdb8c",
    "vulnerability": {
      "title": "SQL Injection",
      "description": "SQL Injection is an attack technique used to exploit applications that construct SQL statements from user-supplied input. When successful, the attacker is able to change the logic of SQL statements executed against the database. The vulnerability is an input validation issue and occurs when SQL queries are insecurely constructed with user input that has not been properly sanitized. Serious risks can arise when an application trusts input supplied by an attacker that is destined for a back-end database with little or no validation."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Low",
      "number_level": 1
    },
    "created": "2016-08-11T17:31:48.683000Z",
    "modified": "2016-08-11T17:31:48.734000Z",
    "payout": null,
    "confidence_score": 100,
    "calculated_payout": "521.11",
    "client_decision": "open",
    "triage_decision": "open",
    "tags": [
      "important",
      "jens",
      "payment"
    ]
  },
  {
    "id": "7bc7ae42-ee41-4b4a-8cd4-8e5252433175",
    "status": "Not verified",
    "creator": "420f0895-f9cf-4798-851e-bddad16fdb8c",
    "vulnerability": {
      "title": "SQL Injection",
      "description": "SQL Injection is an attack technique used to exploit applications that construct SQL statements from user-supplied input. When successful, the attacker is able to change the logic of SQL statements executed against the database. The vulnerability is an input validation issue and occurs when SQL queries are insecurely constructed with user input that has not been properly sanitized. Serious risks can arise when an application trusts input supplied by an attacker that is destined for a back-end database with little or no validation."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Low",
      "number_level": 1
    },
    "created": "2016-08-11T17:31:48.524000Z",
    "modified": "2016-08-11T17:31:48.583000Z",
    "payout": null,
    "confidence_score": 100,
    "calculated_payout": "521.11",
    "client_decision": "approved",
    "triage_decision": "approved",
    "tags": [
      "blog",
      "payment",
      "blog"
    ]
  },
  {
    "id": "a5a7051b-8091-43f5-b38c-49c32acc99e1",
    "status": "Not verified",
    "creator": "420f0895-f9cf-4798-851e-bddad16fdb8c",
    "vulnerability": {
      "title": "Cross Site Request Forgery",
      "description": "Cross-site request forgery (CSRF) exploits the stateless nature of HTTP. In the simplest case, an attacker posts an â€œimageâ€ link on an online forum, and entices the victims to visit the forum (through marketing email or an interesting post). The link is actually an HTTP GET handler on the targeted application that performs some malicious operation. If the victim happens to be authenticated to the application, the browser will make the request on behalf of the victim and send the session cookies along with the request. To the targeted application, the request seems legitimate because the cookie values are valid, and therefore the application processes a request that was not intended by the victim."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Low",
      "number_level": 1
    },
    "created": "2016-08-11T17:31:48.827000Z",
    "modified": "2016-08-11T17:31:48.869000Z",
    "payout": null,
    "confidence_score": 100,
    "calculated_payout": "421.12",
    "client_decision": "open",
    "triage_decision": "open",
    "tags": [
      "johns",
      "critical",
      "johns"
    ]
  },
  {
    "id": "abf24063-84e0-4802-a0e2-9603dafcd199",
    "status": "Duplicate",
    "creator": "420f0895-f9cf-4798-851e-bddad16fdb8c",
    "vulnerability": {
      "title": "Cross Site Scripting",
      "description": "Cross Site Scripting"
    },
    "client": "Space X",
    "risk_level": {
      "title": "High",
      "number_level": 3
    },
    "created": "2016-08-11T17:31:48.896000Z",
    "modified": "2016-08-11T17:31:48.938000Z",
    "payout": null,
    "confidence_score": 100,
    "calculated_payout": "6723.12",
    "client_decision": "open",
    "triage_decision": "open",
    "tags": [
      "important",
      "important",
      "jens"
    ]
  },
  {
    "id": "b088055d-8c30-4902-87cc-a4a8527a19f8",
    "status": "Duplicate",
    "creator": "420f0895-f9cf-4798-851e-bddad16fdb8c",
    "vulnerability": {
      "title": "Cross Site Request Forgery",
      "description": "Cross-site request forgery (CSRF) exploits the stateless nature of HTTP. In the simplest case, an attacker posts an â€œimageâ€ link on an online forum, and entices the victims to visit the forum (through marketing email or an interesting post). The link is actually an HTTP GET handler on the targeted application that performs some malicious operation. If the victim happens to be authenticated to the application, the browser will make the request on behalf of the victim and send the session cookies along with the request. To the targeted application, the request seems legitimate because the cookie values are valid, and therefore the application processes a request that was not intended by the victim."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Low",
      "number_level": 1
    },
    "created": "2016-08-11T17:31:48.366000Z",
    "modified": "2016-08-11T17:31:48.430000Z",
    "payout": null,
    "confidence_score": 100,
    "calculated_payout": "421.12",
    "client_decision": "approved",
    "triage_decision": "approved",
    "tags": [
      "payment",
      "johns",
      "johns"
    ]
  },
  {
    "id": "bcb5e9af-9868-4fdd-8aa7-8a127f483dfd",
    "status": "Verified",
    "creator": "420f0895-f9cf-4798-851e-bddad16fdb8c",
    "vulnerability": {
      "title": "TLS/SSL",
      "description": "The server supports the use of the an insecure TLS/SSL cipher. "
    },
    "client": "Space X",
    "risk_level": {
      "title": "Critical",
      "number_level": 4
    },
    "created": "2016-08-11T17:31:48.615000Z",
    "modified": "2016-08-11T17:31:48.656000Z",
    "payout": null,
    "confidence_score": 100,
    "calculated_payout": "123.32",
    "client_decision": "open",
    "triage_decision": "open",
    "tags": [
      "jens",
      "johns",
      "payment"
    ]
  },
  {
    "id": "d20927df-e76e-491f-9d35-58a68e0d9bd7",
    "status": "Verified",
    "creator": "420f0895-f9cf-4798-851e-bddad16fdb8c",
    "vulnerability": {
      "title": "Cross Site Request Forgery",
      "description": "Cross-site request forgery (CSRF) exploits the stateless nature of HTTP. In the simplest case, an attacker posts an â€œimageâ€ link on an online forum, and entices the victims to visit the forum (through marketing email or an interesting post). The link is actually an HTTP GET handler on the targeted application that performs some malicious operation. If the victim happens to be authenticated to the application, the browser will make the request on behalf of the victim and send the session cookies along with the request. To the targeted application, the request seems legitimate because the cookie values are valid, and therefore the application processes a request that was not intended by the victim."
    },
    "client": "Space X",
    "risk_level": {
      "title": "Low",
      "number_level": 1
    },
    "created": "2016-08-11T17:31:48.095000Z",
    "modified": "2016-08-11T17:31:48.240000Z",
    "payout": null,
    "confidence_score": 100,
    "calculated_payout": "421.12",
    "client_decision": "approved",
    "triage_decision": "approved",
    "tags": [
      "jens",
      "important",
      "jens"
    ]
  },
  {
    "id": "f160cca3-fee8-41c9-9fa2-7e7574f2c54f",
    "status": "Verified",
    "creator": "420f0895-f9cf-4798-851e-bddad16fdb8c",
    "vulnerability": {
      "title": "Cross Site Scripting",
      "description": "Cross Site Scripting"
    },
    "client": "Space X",
    "risk_level": {
      "title": "High",
      "number_level": 3
    },
    "created": "2016-08-11T17:31:48.761000Z",
    "modified": "2016-08-11T17:31:48.801000Z",
    "payout": null,
    "confidence_score": 100,
    "calculated_payout": "6723.12",
    "client_decision": "open",
    "triage_decision": "open",
    "tags": [
      "blog",
      "critical",
      "critical"
    ]
  },
  {
    "id": "1f3cc284-22bb-432c-9dc0-84ad8bfc776e",
    "status": "Not verified",
    "creator": "420f0895-f9cf-4798-851e-bddad16fdb8c",
    "vulnerability": {
      "title": "Cross Site Scripting",
      "description": "Cross Site Scripting"
    },
    "client": "Space X",
    "risk_level": {
      "title": "High",
      "number_level": 3
    },
    "created": "2016-08-11T17:31:48.456000Z",
    "modified": "2016-08-11T17:53:07.927119Z",
    "payout": null,
    "confidence_score": 100,
    "calculated_payout": "6723.12",
    "client_decision": "rejected",
    "triage_decision": "open",
    "tags": [
      "critical",
      "blog",
      "payment"
    ]
  }
];