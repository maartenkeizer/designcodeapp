import React from "react";
import styled from "styled-components/native";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name => dispatch({
      type: "UPDATE_NAME",
      name: name
    })
  }

}

class Avatar extends React.Component {

  state = {
    photo: "http://cdn.onlinewebfonts.com/svg/img_258083.png"
  };

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=1&gender[]=female&to_age=30", {
      headers: new Headers({
        'X-API-KEY': "40DB81A7-30704BDF-BFCB33A4-9CD07159"
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          photo: response[0].photo
        });
        this.props.updateName(response[0].name)
      });
  }


  render() {
    return (
      <Image source={{ uri: this.state.photo }} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`

  width: 44px;
  height: 44px;
 
  border-radius: 22px;
  margin-left: 20px;
  top: 0;
  left: 0;
`;