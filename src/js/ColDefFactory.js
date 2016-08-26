import RefData from './RefData';
import {reactCellRendererFactory} from 'ag-grid-react';
import {reactFilterFactory} from 'ag-grid-react';
import Tags from './components/BugTable/Tags'
import React from 'react';


export default class ColDefFactory {

    createColDefs() {

        var columnDefs = [
            {headerName: "ID", field: "id", enableRowGroup: true, enablePivot: true,
                        width: 140, pinned: true,
                        cellStyle: function(params) {
                            let style = {borderLeft:'3px solid #0a5', textAlign: 'center', textTransform:'uppercase' };
                            if (params.data.risk_level === 'Critical') { style['borderLeft'] = '3px solid #CB000F'  };
                            if (params.data.risk_level === 'High') {style['borderLeft'] = '3px solid #FB6545' };
                            if (params.data.risk_level === 'Low') {style['borderLeft'] = '3px solid #FA3' };
                            return style;
                        },
                        cellRenderer: function(params) {
                           return  '<a href=/#/submissions/' + params.value + '>' + params.value.substr(params.value.length - 4) + '</a>';
                        }

            },
            {headerName: "Status", field: "status", enableRowGroup: true, enablePivot: true,
                        pinned: true, cellStyle: {textTransform:'capitalize'}, cellRenderer: function(params) {
                            if(params.value === "auto_rejected" || params.value === "rejected")
                                return "rejected";
                            else
                                return params.value;
                        }
            },
            {headerName: "Risk", field: "risk_level", enableRowGroup: true, enablePivot: true,
                         pinned: true},
            {headerName: "Type", field: "vulnerability", enableRowGroup: true, enablePivot: true,
                         pinned: true},
            {headerName: "Age(days)", field: "age", enableRowGroup: true, enablePivot: true,
                        pinned: true},
            {headerName: "Confidence(%)", field: "confidence", enableRowGroup: true, enablePivot: true,
                         pinned: true},
            {headerName: "Bounty($)", field: "payout", enableRowGroup: true, enablePivot: true,
                         pinned: true},
            {headerName: "Tags", field: "tags", enableRowGroup: true, enablePivot: true,width:500,
                         pinned: true,
                        cellRenderer:reactCellRendererFactory(Tags)}
                        
                        ];  // end columnDefs

        return columnDefs;
    }
}