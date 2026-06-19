import client from './client'

export const utilisateurApi = {
  getUtilisateurById: (id) => client.get('/utilisateurs/' + id).then((res) => res.data),
  createUtilisateur: (data) => client.post('/utilisateurs/', data).then((res) => res.data),
  updateUtilisateur: (id, data) => client.put('/utilisateurs/' + id, data).then((res) => res.data),
  deleteUtilisateur: (id) => client.delete('/utilisateurs/' + id).then((res) => res.data),
}
