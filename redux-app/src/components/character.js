import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fetchData } from "../actions/actionsRM";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Character = (props) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Dimension C-137 Biggest Threat
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.rm_data.name}
          </Typography>
          <img src={props.rm_data.img} />
          <Typography className={classes.pos} color="textSecondary">
            Location: {props.rm_data.location}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Species:{props.rm_data.species}{" "}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Status: {props.rm_data.status}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rm_data: state.rm_data,
    is_loading_data: state.is_loading_data,
  };
};
export default connect(mapStateToProps, { fetchData })(Character);
