import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { auth } from "../../firebase/firebase";
import CheckboxContainer from "../CheckBox";

// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/demos/tables/SimpleTable.js

class List extends Component {
  componentWillMount() {
    console.log("COMPONENTE - PREGAO");
    console.log(this.props.listaPregao);
    this.renderNomes(this.props.listaPregao);
  }
  renderNomes(x) {
    if (x[0] === undefined) {
      //nao faz nada
    } else {
      var keys = Object.keys(x[0]);
      this.setState({ keys });
      var data = [];
      for (var i = 0; i < x.length; i++) {
        data.push(Object.values(x[i]));
      }
      console.log("--------DATA------------------");
      console.log(data);
      this.setState({ data });
      this.setState({ listaPregao: this.props.listaPregao });
    }
  }

  mudarStatus(index) {
    var IdEdicao = this.state.data[index].key;
    firebase
      .database()
      .ref("Ofertas/" + IdEdicao)
      .update({
        status: "STATUS_DOWN"
      });
  }

  render() {
    return (
      <div className="containerr">
        <div className="paper">
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  {this.state.keys.map((x, i) => {
                    return (
                      <TableCell
                        className="ordenar"
                        onClick={() => {
                          this.ordenar(x);
                        }}
                      >
                        {x}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.listaPregao.map((x, index) => {
                  console.log("x - " + index);
                  console.log(x);
                  let campos = Object.values(x);

                  return (
                    <TableRow>
                      {campos.map((values, i) => {
                        if (values === "STATUS_UP") {
                          if (
                            this.state.data[index].data.usuario ==
                            this.state.usuario
                          ) {
                            return (
                              <TableCell>
                                <button
                                  onClick={() => {
                                    this.mudarStatus(index);
                                  }}
                                >
                                  Tirar
                                </button>
                              </TableCell>
                            );
                          } else {
                            return <TableCell> </TableCell>;
                          }
                        } else {
                          return <TableCell>{values}</TableCell>;
                        }
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}
export default List;
