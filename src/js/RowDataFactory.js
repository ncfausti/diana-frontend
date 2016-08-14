import RefData from './RefData';

export default class RowDataFactory {
    createRowData() {
        var rowData = [];

        for (let i = 0; i < RefData.STATUS.length; i++) {
            let item = RefData.STATUS[i];
            /*
            
            var countryData = RefData.COUNTRIES[i % RefData.COUNTRIES.length];

            rowData.push({
                name: RefData.FIRST_NAMES[i % RefData.FIRST_NAMES.length] + ' ' + RefData.LAST_NAMES[i % RefData.LAST_NAMES.length],
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                address: RefData.ADDRESSES[i % RefData.ADDRESSES.length],
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: countryData.country,
                continent: countryData.continent,
                language: countryData.language,
                mobile: this.createRandomPhoneNumber(),
                landline: this.createRandomPhoneNumber()
            });
            */
            console.log(item);
            rowData.push({
                id:item.id,
                status:item.status,
                vulnerability:item.vulnerability['title'],
                vulnerability_desc:item.vulnerability['description'],
                risk_level:item.risk_level['title'],
                risk_level_num:item.risk_level['number_level'],

                age: this.daysSince(item.created),
                confidence:item.confidence_score,
                payout:item.calculated_payout,
                tags:(function() { return item.tags.join(' ') })()
            });

        }

        return rowData;
    }
    
    daysSince(created) {
        let x = new Date(created);
        let now = new Date();
        return Math.floor( (now - x) / 1000 / 60 / 60 / 24);
    }

    createRandomPhoneNumber() {
        var result = '+';
        for (var i = 0; i < 12; i++) {
            result += Math.round(Math.random() * 10);
            if (i === 2 || i === 5 || i === 8) {
                result += ' ';
            }
        }
        return result;
    }

}