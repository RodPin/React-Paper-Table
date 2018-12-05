import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends Component {


  render() {
    const data = [
      {
        name: "Tanner Linsley",
        age: 26,
        a: "asdasd",
        b: "aaspdlsk",
        c: "0isd0isd",
        d: "okokado",
        e: "oksodksdo",
        f: "psoposs",
        g: "oksoadioasd",
        h: "pspspspspsp",
        i: "posdpsd",
        j: "osdosisodds",
        k: "oisdosids",
        l: "mamamama",
        n: "osidsoidsods",
        m: "oioisdoiodsds",
        o: "osdosiods",
        p: "dsoidsio",
        q: "oisdoisds",
        w: "posdosidsods",
        z: "osdosidso",
        y: "osidosidosds"
      },
      {
        name: "Ricardo Granada",
        age: 45,
        a: "asdasd",
        b: "alsk",
        c: "0iisd",
        d: "okdo",
        e: "oksodksdo",
        f: "psos",
        g: "oksoadioasd",
        h: "psppspsp",
        i: "ppsd",
        j: "ossodds",
        k: "oisdosids",
        l: "mma",
        n: "osidsoidsods",
        m: "oioisdoiodsds",
        o: "ods",
        p: "dsoidsio",
        q: "oisdoisds",
        w: "posidsods",
        z: "osidso",
        y: "osiidosds"
      },
      {
        name: "Renato Vianna",
        age: 20,
        a: "asdasd",
        b: "aaslsk",
        c: "0isdd",
        d: "odo",
        e: "oksodksdo",
        f: "psoposs",
        g: "oksoadoasd",
        h: "pspxcxcxcspspspsp",
        i: "posdpsd",
        j: "osdodds",
        k: "oisdosids",
        l: "mamamama",
        n: "osiods",
        m: "os",
        o: "osiods",
        p: "dsoidsio",
        q: "oids",
        w: "posdosidsods",
        z: "osdosidso",
        y: "osidosidosds"
      },
      {
        name: "Logan Awell",
        age: 6,
        a: "asdasd",
        b: "aasqrepdlsk",
        c: "0ixxxxsd0isd",
        d: "okoksdfsdafado",
        e: "oksodksdo",
        f: "psopcccfoss",
        g: "oksoadioasd",
        h: "pspspsasdfpspsp",
        i: "posdpsd",
        j: "osdfzfasdfosisodds",
        k: "oisdosids",
        l: "mamamama",
        n: "osidxzcvsoidsods",
        m: "oioisdoiodsds",
        o: "osdosiods",
        p: "dsoidsio",
        q: "oisdoisds",
        w: "posdosidsods",
        z: "osdosidso",
        y: "osidosidosds"
      }
    ];

    const columns = [
      {
        Header: "Name",
        accessor: "name" // String-based value accessors!
      },
      {
        Header: "Age",
        accessor: "age"
      },
      {
        Header: "a",
        accessor: "a"
      },
      {
        Header: "b",
        accessor: "b"
      },
      {
        Header: "c",
        accessor: "c"
      },
      {
        Header: "d",
        accessor: "d"
      },
      {
        Header: "e",
        accessor: "e"
      },
      {
        Header: "f",
        accessor: "f"
      },
      {
        Header: "g",
        accessor: "g"
      },
      {
        Header: "h",
        accessor: "h"
      },
      {
        Header: "i",
        accessor: "i"
      },
      {
        Header: "j",
        accessor: "j"
      },
      {
        Header: "k",
        accessor: "k"
      },
      {
        Header: "l",
        accessor: "l"
      },
      {
        Header: "m",
        accessor: "m"
      },
      {
        Header: "n",
        accessor: "n"
      }
    ];

    return (
      <div className="container"> 
       // usar a prop defaultPageSize para dizer quantas colunas tera a tabela(consequentemente seu tamanho..
      //usar className do css pra dizer qual ser seu width ....
        <ReactTable data={data} columns={columns} />
      </div>
    );
  }
}

export default App;
