import React, { useState, useEffect } from 'react';
import FournTable from './components/FournTable';
import FournForm from './components/FournForm';
import ConfirmForm from './components/ConfirmForm';

export default function Dashboard() {
  const [vendors, setVendors] = useState([]);
  const [vendorDetails, setVendorDetails] = useState({
    companyName: '',
    contactPerson: '',
    contactPersonPosition: '',
    email: '',
    phone: ''
  });
  const [isEdit, setIsEdit] = useState(false);
  const [currentVendorId, setCurrentVendorId] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Fetch/Récupère les fournisseurs au chargement de la page
  useEffect(() => {
    fetchVendors();
  }, []);

  //Afficher un message/une erreur pendant 3 secondes maximum
  useEffect(() => {
    if (message || error) {
      const timer = setTimeout(() => {
        setMessage(''); // Clear le message
        setError(''); // Clear l'erreur
      }, 3000); // 3000 milliseconds = 3 seconds
      return () => clearTimeout(timer);
    }
  }, [message, error]);

  //Récupérer la liste des fournisseurs
  const fetchVendors = async () => {
    try {
      const API_BASE_URL = process.env.REACT_APP_BACKEND_API_URL;
      const response = await fetch(`${API_BASE_URL}/vendors/all-vendors`); // ${API_BASE_URL} correspond à localhost:8000
      const data = await response.json(); // Récupère les données en JSON
      
      if (Array.isArray(data)) {
        setVendors(data); // Récupère les données dans le state "vendors"
      } else {
        setVendors([]); // Retourne un tableau vide si les données ne sont pas un tableau
      }
    } catch (error) {
      console.error("Error fetching vendors: ", error);
      setVendors([]); // Retourne un tableau vide en cas d'erreur
    }
  };
  
  // Permet de modifier les détails d'un fournisseur
  const handleEdit = (vendor) => {
    setVendorDetails(vendor);
    setCurrentVendorId(vendor.id);
    setIsEdit(true);
  };

  // Permet de supprimer un fournisseur
  const handleDelete = (vendorId) => {
    setCurrentVendorId(vendorId);
  };

  // Permet de gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Permet d'ajouter un nouveau fournisseur
  const handleAddNew = () => {
    // Reset du formulaire lors de l'ajout d'un nouveau fournisseur
    setVendorDetails({
      companyName: '',
      contactPerson: '',
      contactPersonPosition: '',
      email: '',
      phone: ''
    });
    setIsEdit(false);
  };

  // Fonction permettant d'ajouter/modifier un fournisseur
  const handleSubmit = async () => {
    try {
      const method = isEdit ? 'PUT' : 'POST';
      const API_BASE_URL = process.env.REACT_APP_BACKEND_API_URL;
      const url = isEdit ? `${API_BASE_URL}/vendors/update-vendor/${currentVendorId}` : `${API_BASE_URL}/vendors/add-vendor`;
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vendorDetails),
      });

      if (response.ok) {
        setMessage(isEdit ? 'Fournisseur mis à jour avec succès !' : 'Fournisseur ajouté avec succès !');
        fetchVendors();
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Echec de la soumission.');
      }
    } catch (err) {
      console.error("Erreur lors de l'ajout - ", err);
      setError('Une erreur inconnue s\'est produite. o.0');
    }
  };

  // Fonction permettant de supprimer un fournisseur
  const handleDeleteConfirm = async (vendorId) => {
    const API_BASE_URL = process.env.REACT_APP_BACKEND_API_URL;
    const response = await fetch(`${API_BASE_URL}/vendors/delete-vendor/${vendorId}`, {
      method: 'DELETE',
    });

    if (response.status === 200) {
      setMessage('Fournisseur supprimé avec succès.');
      fetchVendors(); // Permet de refresh la liste des fournisseurs après suppression
    } else {
      setError('Echec de la suppression.');
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-header d-print-none mb-3">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col">
                <h2 className="page-title">FOURNISSEURS</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <button href="#" className="btn btn-yellow" onClick={() => handleAddNew()} data-bs-toggle="modal" data-bs-target="#FournForm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24V24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                  Ajouter un fournisseur
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xl">
          
          {message && <div className='alert alert-success'>{message}</div>}
          {error && <div className='alert alert-danger'>{error}</div>}

          <div className='card'>
            <div className='card-header'>
              <div className='card-title'>
                Liste des fournisseurs
              </div>
            </div>
            <FournTable vendors={vendors} onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        </div>

        <FournForm vendorDetails={vendorDetails} handleChange={handleChange} handleSubmit={handleSubmit} isEdit={isEdit} />
        <ConfirmForm vendorId={currentVendorId} onDeleteConfirm={handleDeleteConfirm} />
      </div>
    </>
  );
}
