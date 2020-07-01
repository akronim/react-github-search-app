import React from "react";
import Table from "../components/table";

const UserRepos = (props) => {
  const data = [];

  const columns = [
    {
      name: "name",
      text: "NAME",
      sortable: true,
      type: "string",
    },
    {
      name: "description",
      text: "DESCRIPTION",
    },
    {
      name: "html_url",
      text: "URL",
      type: "link",
    },
  ];

  props.repos.map(function (key, index) {
    data.push({
      name: key.name,
      description: key.description,
      html_url: key.html_url,
    });
  });

  return <Table data={data} columns={columns}></Table>;
};

export default UserRepos;
