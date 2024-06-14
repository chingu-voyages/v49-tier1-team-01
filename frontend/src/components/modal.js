import Modal from 'react-modal';
import React from 'react';

Modal.setAppElement('#root');

const ErrorWindow = (props) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.errorMessage !== '') {
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
    }
  }, [props.errorMessage]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'black',
            width: '85%', 
            height: '20%', 
            margin: 'auto' 
          }
        }}
      >
        <button onClick={closeModal} style={{margin: '3vw'}}>X</button>
        <h2>{props.errorMessage}. Please try again later. </h2>
      </Modal>
    </div>
  );
};

export default ErrorWindow;