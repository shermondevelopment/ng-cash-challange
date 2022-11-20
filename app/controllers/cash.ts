import { Request, Response } from 'express'

import cashOutService from '../services/cashOutService'

/** service */

const CashOutController = async (req: Request, res: Response) => {
  const { id: id_cash_out } = res.locals.user
  const { username, value } = req.body

  await cashOutService({ id_cash_out, username, value })
  res.sendStatus(200)
}

export default CashOutController
