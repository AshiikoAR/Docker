import React from 'react';

export default function ConfirmForm({ vendorId, onDeleteConfirm }) {
  return (
    <div className="modal modal-blur fade" id="ConfirmForm" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmer la suppression</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
          </div>
          <div className="modal-body">
            <p>Êtes-vous sûr de vouloir supprimer ce fournisseur ?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn me-auto" data-bs-dismiss="modal">Annuler</button>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => onDeleteConfirm(vendorId)}>
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
