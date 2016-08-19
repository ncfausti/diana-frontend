import RefData from './RefData';

export default class RowDataFactory {
    createRowData() {
        var rowData = new APIRequest().makeCorsRequest( '','','GET','api/status/', function(response){
            let rowData = [];
            let items = JSON.parse(response);
            for (let i = 0; i < items.length; i++) {
                let item = items[i];

                rowData.push({
                    id:item.id,
                    status:item.status,
                    vulnerability:item.vulnerability['title'],
                    vulnerability_desc:item.vulnerability['description'],
                    risk_level:item.risk_level['title'],
                    risk_level_num:item.risk_level['number_level'],
                    age: (function() {
                            let created = item.created;
                            let time_created = new Date(created);
                            let now = new Date();
                            return Math.floor( (now - time_created) / 1000 / 60 / 60 / 24);})(),
                    confidence:item.confidence_score,
                    payout:item.calculated_payout,
                    tags:(function() { return item.tags.join(' ') })()
                });
            }
            console.log(rowData);
            return rowData;
        });
    }
}