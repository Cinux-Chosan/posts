import Ember from 'ember';

export default Ember.Component.extend({
    modalTitle: 'ModalTitle',
    modalText: 'ModalText',
    actions: {
        showModal() {
            $('#myTipModal').modal('show');
        },
        hideModal() {
            $('#myTipModal').modal('hide');
        }

    }
});
