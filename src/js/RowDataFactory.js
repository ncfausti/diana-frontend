import RefData from './RefData';

export default class RowDataFactory {
    createRowData() {
        var rowData = [];

        for (let i = 0; i < RefData.STATUS.length; i++) {
            let item = RefData.STATUS[i];

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
        let time_created = new Date(created);
        let now = new Date();
        return Math.floor( (now - time_created) / 1000 / 60 / 60 / 24);
    }

}