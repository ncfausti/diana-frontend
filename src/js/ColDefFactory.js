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
                            if (params.data.risk_level === 'Critical') return {borderLeft:'3px solid #CB000F'};
                            if (params.data.risk_level === 'Medium') return {borderLeft:'3px solid #FB6545'};
                            if (params.data.risk_level === 'Low') return {borderLeft:'3px solid gold'};
                            return {borderLeft:'3px solid red'};
                        },
                        cellRenderer: function(params) {
                           return  '<a href=/#/submissions/' + params.value + '>' + params.value + '</a>';
                        }

            },
            {headerName: "Status", field: "status", enableRowGroup: true, enablePivot: true,
                        pinned: true, cellStyle: {textTransform:'capitalize'}
            },
            {headerName: "Risk", field: "risk_level","hide":true, enableRowGroup: true, enablePivot: true,
                         pinned: true},
            {headerName: "Type", field: "vulnerability","hide":true, enableRowGroup: true, enablePivot: true,
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