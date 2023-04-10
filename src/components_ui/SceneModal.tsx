import React from "react";
import Modal from "react-native-modal";
export interface SceneModalProps {
    isVisible: boolean
    onBackdropPress: ()=> void
    children: JSX.Element
}

const SceneModal = (props:SceneModalProps) => {
    const {
        isVisible,
        onBackdropPress,
        children
    } = props

    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        style={{margin:0}}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
      >
       {children}
      </Modal>
    );
};


export default SceneModal
