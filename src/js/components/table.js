import React, { Component } from "react";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        col: null,
        order: null,
        arrow: "\u25B2",
      },
    };
  }

  compareBy = (a, b, key, type) => {
    let _a = a[key];
    let _b = b[key];
    switch (type) {
      case "string":
        _a = _a.toUpperCase();
        _b = _b.toUpperCase();
        break;

      default:
        break;
    }

    if (_a < _b) return -1;
    if (_a > _b) return 1;
    return 0;
  };

  sortBy = (key, type) => {
    let _sort = {
      col: key,
      order: "asc",
      arrow: "\u25B2",
    };
    if (this.state.sort.col !== key || this.state.sort.order == "desc") {
      this.props.data.sort((a, b) => this.compareBy(a, b, key, type));
    } else {
      this.props.data.sort((a, b) => this.compareBy(b, a, key, type));

      _sort.order = "desc";
      _sort.arrow = "\u25BC";
    }

    this.setState({ sort: _sort });
  };

  renderTableHeader = () => {
    return this.props.columns.map((key, index) => {
      if (key.sortable) {
        return (
          <th key={index} onClick={() => this.sortBy(key.name, key.type)}>
            {this.state.sort.col == key.name ? (
              <span>
                {this.state.sort.arrow} {key.text}
              </span>
            ) : (
              <span>
                {"\u2B81"} {key.text}
              </span>
            )}
          </th>
        );
      }
      return <th key={index}>{key.text}</th>;
    });
  };

  renderTableData = () => {
    var items = this.props.data;
    return items.map((row, index) => {
      return (
        <tr key={index}>
          {this.props.columns.map((column, index) => {
            {
              if (column.type == "link") {
                return (
                  <td key={index} data-label={column.text}>
                    <a href={row[column.name]} target="_blank">
                      {row[column.name]}
                    </a>
                  </td>
                );
              }
              return (
                <td key={index} data-label={column.text}>
                  {row[column.name]}
                </td>
              );
            }
          })}
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
