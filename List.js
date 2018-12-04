//USING PAPER
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/demos/tables/SimpleTable.js

class List extends Component {
  componentWillMount() {
    this.renderNomes(this.props.listaPregao);
  }
  renderNomes(x) {
    //PT- funçao tanto para ajustar as keys numa array e passar para a primeira linha da tabela, e o resto tambem atraves de uma variavel de estado
 
    //ENG- function to put keys an array to be rendered on the first line of the table.
    
    if (x[0] === undefined) {
      //nao faz nada
    } else {
      var keys = Object.keys(x[0]);
      this.setState({ keys });
      this.setState({ listaPregao: this.props.listaPregao });
    }
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
      
                      >
                        {x}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.listaPregao.map((x, index) => {
               
                  let campos = Object.values(x);

                  return (
                    <TableRow>
                      {campos.map((values, i) => {
                            return (
                              <TableCell>
                                {values}
                              </TableCell>
                            );
                          }
                      )}
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
