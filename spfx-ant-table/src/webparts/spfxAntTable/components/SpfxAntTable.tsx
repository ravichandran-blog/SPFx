import * as React from 'react';
import { ISpfxAntTableProps } from './ISpfxAntTableProps';
import { Table, Button } from 'antd';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import 'antd/dist/antd.css';

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];



export default class SpfxAntTable extends React.Component<ISpfxAntTableProps, {}> {

  constructor(props: ISpfxAntTableProps) {
    super(props)
    sp.setup({ spfxContext: this.props.context });
    this.getvalues();
  }

  getvalues = async () => {
    const allItems: any[] = await sp.web.lists.getByTitle("Departments").items.getAll();
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
    const columns = [
      {
        title: 'Title',
        dataIndex: 'Title',
        key: 'Title',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'Title' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Number Of People',
        dataIndex: 'NumberOfPeople',
        key: 'NumberOfPeople',
        sorter: (a, b) => a.NumberOfPeople - b.NumberOfPeople,
        sortOrder: sortedInfo.columnKey === 'NumberOfPeople' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Description',
        dataIndex: 'Description',
        key: 'Description',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'Description' && sortedInfo.order,
        ellipsis: true,
      },
    ];
    return (
      <>
        <Button onClick={this.clearFilters}>Clear filters</Button>
        <Table columns={columns} dataSource={this.state.data} onChange={this.handleChange} />
      </>
    );
  }
}
