import { getApps, initializeApp, cert } from 'firebase-admin/app';

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: "acadamiaelitemx",
  private_key_id: "2b4d5e4bccb54f25689baf76db32ab988513ea76",
  private_key: "-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC46Ky46kmTCio7\\nrlNQp4DD6NuB4yZ0XHnlXOXpnuZDBD6sPVYM7tpIpSWzUUK1ScefFchivK5oWIkM\\nAgyJr5unN5OS94uwmYV5Dmxg0Do8O7cUo/hoXNgdFFT1KO+9SrUrGpHA+4fFM9rw\\noCUYh93VLJnCoXxqrtUMK195HVHpLbMAypmYnXBGo9/CKWzkH3ewQZkjonbl/Zwl\\nRabiwsc/gX7MLveDOPtem9kgV0cFHRu9nKdARX/YebqNac0xiRy79pA0t15C05LB\\nLi5Y93GkVeb9lMfeqpTBb6a2tLxfskywFmCgKjCn82u2kJQtSCOIb51PVpQkpDzI\\nPHbCdvYDAgMBAAECggEAAnk0+5xBXl1/xyCZLguvkJn9ewqmKbRQT8h4WDGvSYI1\\nsb7Nod/9Z4SzW7y13xBHl/yF8QbZG72OHResl0LpcB6G3ivANfKNHdtwM7NVXsI7\\nEWRIHw1EOXoGJj66m5ZI6h9cMnAAQZu5+Adht6b0SV+5XCh7g5R8dmyLcGamAS/S\\nH4j6dtG5k9hCu1ZdI7VxDeo5JqJ9Lv3Ewm4mmp0fxQ+AoiwY9HCXVaMtnGqbbv87\\nUV+PWkpX9GxDu7wZQHYIZClSqXVV0tcj5l2lu3Ie7g4ja6dMxxHw8PxmAfd8qkjX\\nyh/fcvMAA+LNGxxlzDXnILqMrExXF7S4nk9wRfMzcQKBgQDxlgfsUPoVxxUZLREt\\nU0sGr4mGsUyvXsIIaqej2mtORBklxLRX+gIUyZALDAdGX8uZyeZc4LC6OYH4Om+V\\nxix2svz9T58LGex6BdHOHW4NhnRYFcYcLE1A3b6uOnHj8yviU8mr9ez6+nzkcP/c\\nVdjRnDh1QjaYD/e4Bw3m2GEu9wKBgQDD8PXgife6NdKMr6PjErRKpQrjR2qpsyV0\\n6XaUbXVXP8HLNG45XlLOLk09v16lpxIlTckoJ2iCO9AxrfDHURhDRvcxIjlvViz2\\nzsQcKnKy6M/NEXPTTYG6mkvWgUaN7e8hRNeig8GymJa/8scoL+fSzxuv4gAKeS53\\nzKazuAMSVQKBgGc+nxQ3Zyl3c2TXBchBGIc67aNKkmNAM9w0+H/mEIXaRIUHk6sl\\nhU4s9gpCkblZp0GKL5Dx1ZVAjnLvRlDT6Jyx0bzQEkBES/O6GPflS+sr0vzyEUBp\\nDnrySVNcVt/8RHztIfsDlsuL0WQvhqk7ZvXttZMnQP2rlUpoeWB2iNHxAoGAZT1t\\nbZUb4KTKo1JlNYCGk0Lvezt9Sy17Hws577sWs/wHX705bn7j/hBCbLMibikC4S9t\\nzkd+YjwReHnNPM8T4D8cndB3KKW4GdX/0iXEmdhc9jIcTINxkj8DDFRDZjYYJnJx\\nkFDPlj3tNkR0zrjh6TSFs7zsFH1EmzWstJNRUvkCgYAeRhXCAtC/n1jF5TXazKAM\\nWDG3XQ1k9xrtukM0tk/Wgn3K/wcrAmds5/57fR0CSTn4Ba7Dw2WI8TkiGPuAHqij\\n61T6SVvPnVFl1TouuzTRaQP1XsSKoW2ZbRyMR9aZFoe4wkUVt4r1cYvA/naLkr3L\\nGp8xdZzuQYwAKHbeLxjXwA==\\n-----END PRIVATE KEY-----\\n".replace(/\\n/g, "\n"),
  client_email: "firebase-adminsdk-mqoi9@acadamiaelitemx.iam.gserviceaccount.com",
  client_id: "110618426532022576187",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mqoi9%40acadamiaelitemx.iam.gserviceaccount.com"
};
const app = activeApps.length === 0 ? initializeApp({
  credential: cert(serviceAccount)
}) : activeApps[0];

export { app as a };
