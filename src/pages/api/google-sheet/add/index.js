import { v4 as uuidv4 } from 'uuid'
import { callApiGoogleSheet } from '../../../../helpers/index'

const { SPREADSHEET_ID_LOCAL, SHEET_ID } = process.env

const handlerGoogle = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(400).json({ error: 'Method not allowed' })
  }

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const date = new Date()

  if (req.method === 'POST') {
    try {
      const { sheet } = await callApiGoogleSheet(SPREADSHEET_ID_LOCAL, SHEET_ID)

      const clientDetails = {
        fecha_creacion: date.toLocaleDateString('es-MX', options),
        id: uuidv4(),
        nombre: req.body.first_name || '',
        telefono: req.body.phone,
        email: req.body.email,
        servicio: req.body.service || req.body.message,
      }

      await sheet.addRow(clientDetails)
      res.status(200).json({
        message: `Reservación ${clientDetails.id} agregada correntamente en google sheet`,
      })
    } catch (err) {
      res.status(400).json({
        error: err.message,
      })
    }
  }
}

export default handlerGoogle
