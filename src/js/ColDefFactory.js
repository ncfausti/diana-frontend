import SkillsCellRenderer from './SkillsCellRenderer';
import RefData from './RefData';
import {reactCellRendererFactory} from 'ag-grid-react';
import {reactFilterFactory} from 'ag-grid-react';
import SkillsFilter from './SkillsFilter';
import ProficiencyFilter from './ProficiencyFilter';

export default class ColDefFactory {

    createColDefs() {

        var columnDefs = [
            {headerName: "ID", field: "id", enableRowGroup: true, enablePivot: true,
                        width: 80, pinned: true},
            {headerName: "Status", field: "name", enableRowGroup: true, enablePivot: true,
                        width: 80, pinned: true},
            {headerName: "Risk", field: "name", enableRowGroup: true, enablePivot: true,
                        width: 80, pinned: true},
            {headerName: "Type", field: "name", enableRowGroup: true, enablePivot: true,
                        width: 120, pinned: true},
            {headerName: "Age(days)", field: "name", enableRowGroup: true, enablePivot: true,
                        width: 90, pinned: true},
            {headerName: "Confidence(%)", field: "name", enableRowGroup: true, enablePivot: true,
                        width: 110, pinned: true},
            {headerName: "Bounty($)", field: "name", enableRowGroup: true, enablePivot: true,
                        width: 100, pinned: true},
            {headerName: "Tags", field: "name", enableRowGroup: true, enablePivot: true,
                        width: 80, pinned: true}
            ];

          /*  
            {
                headerName: 'Employee',
                children: [
                    {headerName: "Name", field: "name", enableRowGroup: true, enablePivot: true,
                        width: 150, pinned: true},
                    {headerName: "Country", field: "country", width: 150, enableRowGroup: true, enablePivot: true,
                        // not bothering with React for country, as it's a simple HTML string
                        cellRenderer: countryCellRenderer, pinned: true,
                        filterParams: {cellRenderer: countryCellRenderer, cellHeight: 20}},
                ]
            },
            {
                headerName: 'IT Skills',
                children: [
                    {headerName: "Skills", width: 125, suppressSorting: true, field: 'skills', enableRowGroup: true, enablePivot: true,
                        // using ag-Grid's React cellRenderer factory
                        cellRenderer: reactCellRendererFactory(SkillsCellRenderer),
                        // using ag-Grid's React filter factory
                        filter: reactFilterFactory(SkillsFilter)
                    },
                    {headerName: "Proficiency", field: "proficiency", filter: 'number', width: 120, enableValue: true,
                        // using ag-Grid's React cellRenderer factory
                        cellRenderer: reactCellRendererFactory(ProficiencyCellRenderer),
                        // using ag-Grid's React filter factory
                        filter: reactFilterFactory(ProficiencyFilter)}
                ]
            },
            {
                headerName: 'Contact',
                children: [
                    {headerName: "Mobile", field: "mobile", width: 150, filter: 'text'},
                    {headerName: "Land-line", field: "landline", width: 150, filter: 'text'},
                    {headerName: "Address", field: "address", width: 500, filter: 'text'}
                ]
            }
        ]; 
        */
        return columnDefs;
    }
}