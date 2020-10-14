import dbConnect from '../../../utils/dbConnect';
import Order from '../../../models/Order';

dbConnect();

export default async (req, res) => {
  const {
    query: {id},
    method
   } = req;

   switch (method) {
     case 'GET':
       try {
         const order = await Order.findById(id)

         if (!order) {
           return res.status(400).json({success: false})
         }

         res.status(200).json({ success: true, data: order})
       } catch (error) {
        res.status(400).json({success: false})
       }
       break;
       case 'PUT':
        try {
          const order = await Order.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
          })

          if (!order) {
            return res.status(400).json({success: false})
          }
 
          res.status(200).json({ success: true, data: order})
        } catch (error) {
         res.status(400).json({success: false})
        }
        break;
        case 'DELETE':
        try {
          const deleteOrder = await Order.deleteOne({_id: id})

          if (!deleteOrder) {
            return res.status(400).json({success: false})
          }
 
          res.status(200).json({ success: true, data: {}})
        } catch (error) {
         res.status(400).json({success: false})
        }
        break;
     default:
      res.status(400).json({success: false})
       break;
   }
}
