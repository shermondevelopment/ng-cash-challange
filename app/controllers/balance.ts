import { Request, Response } from 'express'

/** service */
import viewBalanceService from '../services/balanceService'

const ViewBalanceController = async (req: Request, res: Response) => {
  const { id } = res.locals.user

  const balance = await viewBalanceService(id)
  res.status(200).json(balance)
}

export default ViewBalanceController
