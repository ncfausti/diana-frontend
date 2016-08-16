import RefData from './RefData';
import {reactCellRendererFactory} from 'ag-grid-react';
import {reactFilterFactory} from 'ag-grid-react';


export default class ColDefFactory {

    createColDefs() {

        var columnDefs = [
            {headerName: "ID", field: "id", enableRowGroup: true, enablePivot: true,
                        width: 80, pinned: true,
                        cellStyle: function(params) {
                            if (params.data.risk_level_num === 5) return {borderLeft:'3px solid red'};
                            if (params.data.risk_level_num === 3) return {borderLeft:'3px solid orange'};
                            if (params.data.risk_level_num === 1) return {borderLeft:'3px solid gold'};
                            return {borderLeft:'3px solid red'};
                        },
                        cellRenderer: function(params) {
                           return  '<a href=details/' + params.value + '>' + params.value + '</a>';
                        }

            },
            {headerName: "Status", field: "status", enableRowGroup: true, enablePivot: true,
                        width: 80, pinned: true},
            {headerName: "Risk", field: "risk_level", enableRowGroup: true, enablePivot: true,
                        width: 80, pinned: true},
            {headerName: "Type", field: "vulnerability", enableRowGroup: true, enablePivot: true,
                        width: 120, pinned: true},
            {headerName: "Age(days)", field: "age", enableRowGroup: true, enablePivot: true,
                        width: 90, pinned: true},
            {headerName: "Confidence(%)", field: "confidence", enableRowGroup: true, enablePivot: true,
                        width: 110, pinned: true},
            {headerName: "Bounty($)", field: "payout", enableRowGroup: true, enablePivot: true,
                        width: 100, pinned: true},
            {headerName: "Tags", field: "tags", enableRowGroup: true, enablePivot: true,
                        width: 120, pinned: true}
            ];

        return columnDefs;
    }
}