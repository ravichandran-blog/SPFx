import * as React from 'react';
import { ISpfxAntTableProps } from './ISpfxAntTableProps';
import { Table, Button } from 'antd';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import 'antd/dist/antd.css';

export default class SpfxAntTable extends React.Component<ISpfxAntTableProps, {}> {

  constructor(props: ISpfxAntTableProps) {
    super(props)
    sp.setup({ spfxContext: this.props.context });
    this.getvalues();
  }

  getvalues = async () => {
    const allItems: any[] = await sp.web.lists.getByTitle("Departments").items.get();
    this.setState({ data: allItems })
  }

  state = {
    filteredInfo: null,
    sortedInfo: null,
    data: []
  };
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  public render(): React.ReactElement<ISpfxAntTableProps> {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    let titlearr: any[] = [];
    let numberarr: any[] = [];

    this.state.data.forEach(function (dept, i) {
      titlearr.push({ text: dept.Title, value: dept.Title });
      numberarr.push({ text: dept.NumberOfPeople, value: dept.NumberOfPeople });
    });

    titlearr = this.unique(titlearr, "text")
    numberarr = this.unique(numberarr, "text")

    const columns = [
      {
        title: 'Title',
        dataIndex: 'Title',
        key: 'Title',
        filters: titlearr,
        filteredValue: filteredInfo.Title || null,
        onFilter: (value, record) => record.Title.includes(value),
        sorter: (a, b) => a.Title.length - b.Title.length,
        sortOrder: sortedInfo.columnKey === 'Title' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Number Of People',
        dataIndex: 'NumberOfPeople',
        key: 'NumberOfPeople',
        filteredValue: filteredInfo.NumberOfPeople || null,
        filters: numberarr,
        sorter: (a, b) => a.NumberOfPeople - b.NumberOfPeople,
        sortOrder: sortedInfo.columnKey === 'NumberOfPeople' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Description',
        dataIndex: 'Description',
        key: 'Description',
        
        onFilter: (value, record) => record.Description.includes(value),
        sorter: (a, b) => a.Description.length - b.Description.length,
        sortOrder: sortedInfo.columnKey === 'Description' && sortedInfo.order,
        ellipsis: true,
      },
    ];
    return (
      <div style={{ padding: '20px' }}>
        <Button onClick={this.clearFilters} style={{margin:'0px 0px 20px 0px'}}>Clear filters</Button>
        <Table columns={columns} dataSource={this.state.data} onChange={this.handleChange} />
      </div>
    );
  }
  private unique(array, propertyName) {
    return array.filter((e, i) => array.findIndex(a => a[propertyName] === e[propertyName]) === i);
  }
}
