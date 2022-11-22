import dbConnect from '../../server/lib/dbConnect';
import User from '../../server/models/User';

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({})
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {

        const registerData = req.body;

        const {name, email, password, userType} = registerData || {};
          //hash the password and store, for test purposes I did not
        const user = await User.create({
          name,
          email,
          password,
          userType  
        })
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
