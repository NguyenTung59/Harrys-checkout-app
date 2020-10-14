import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';

dbConnect();

export default async (req, res) => {
  const {
    query: {id},
    method
   } = req;

   switch (method) {
     case 'GET':
       try {
         const product = await Product.findById(id)

         if (!product) {
           return res.status(400).json({success: false})
         }

         res.status(200).json({ success: true, data: product})
       } catch (error) {
        res.status(400).json({success: false})
       }
       break;
       case 'PUT':
        try {
          const product = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
          })

          if (!product) {
            return res.status(400).json({success: false})
          }
 
          res.status(200).json({ success: true, data: product})
        } catch (error) {
         res.status(400).json({success: false})
        }
        break;
        case 'DELETE':
        try {
          const deleteProduct = await Product.deleteOne({_id: id})

          if (!deleteProduct) {
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
