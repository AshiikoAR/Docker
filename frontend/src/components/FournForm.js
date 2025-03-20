import React from 'react';

export default function FournForm({ vendorDetails, handleChange, handleSubmit, isEdit }) {
  return (
    <div className="modal modal-blur fade" id="FournForm" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{isEdit ? 'Modifier le fournisseur' : 'Ajouter un fournisseur'}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
          </div>
          <div className="modal-body">
            
            {/* Champs du formulaire */}
            <div className='row'>
              <div className='col-12 mb-3'>
                <label className='form-label required'>Nom de l'entreprise</label>
                <input className='form-control' name='companyName' value={vendorDetails.companyName} onChange={handleChange} />
              </div>
              <div className='col-6 mb-3'>
                <label className='form-label required'>Contact</label>
                <input className='form-control' name='contactPerson' value={vendorDetails.contactPerson} onChange={handleChange} />
              </div>
              <div className='col-6 mb-3'>
                <label className='form-label'>Poste</label>
                <input className='form-control' name='contactPersonPosition' value={vendorDetails.contactPersonPosition} onChange={handleChange} />
              </div>
              <div className='col-12 mb-3'>
                <label className='form-label required'>Email</label>
                <input className='form-control' name='email' value={vendorDetails.email} onChange={handleChange} />
              </div>
              <div className='col-12 mb-3'>
                <label className='form-label required'>Téléphone</label>
                <input className='form-control' name='phone' value={vendorDetails.phone} onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn me-auto" data-bs-dismiss="modal">Fermer</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>
              {isEdit ? 'Mettre à jour le fournisseur' : 'Ajouter le fournisseur'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}