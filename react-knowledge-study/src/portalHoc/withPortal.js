import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Modal } from "antd";
import "antd/dist/antd.css";

let id = document.getElementById("portal");

function withPortal(WrapperComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false,
        title: "Basic Modal",
        conten: "",
      };
    }

    confirm = (option = {}) => {
      this.setState({
        visible: true,
        title: option.title,
        content: option.content,
      });
      this.onOk = option.onOk;
      this.onCancel = option.onCancel;
    };
    render() {
      const { title, content, visible } = this.state;
      console.log("this.props................", this.props);
      console.log("this.state................", this.state);
      return createPortal(
        <>
          <WrapperComponent confirm={this.confirm} {...this.props} />
          <Modal
            title={title}
            visible={visible}
            onOk={() => {
              this.setState({ visible: false }, () => {
                this.onOk && this.onOk();
              });
            }}
            onCancel={() => {
              this.setState({ visible: false }, () => {
                this.onCancel && this.onCancel();
              });
            }}
          >
            <p>{content}</p>
          </Modal>
        </>, id
      );
    }
  };
}

export default withPortal;
