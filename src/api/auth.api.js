import client from './client'

export const authApi = {
  signupProf: (data) => client.post('/auth/insciption/professeur', data).then((res) => res.data),
  signupEleve: (data) => client.post('/auth/insciption/eleve', data).then((res) => res.data),
  login: (credentials) => client.post('/auth/login', credentials).then((res) => res.data),
}
