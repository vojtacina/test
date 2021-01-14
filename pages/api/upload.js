import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/uploads";
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
   /*  console.log(err, fields, files); */

    res.status(200).json({ 
      fields: fields,
      err: err,
      files: files
     })

  });

  

};