const StringDecoder=require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf-8');

exports.captureSendings=(req,res)=>{
   let buffer='';
   req.on('data',function(data){
       buffer+=decoder.write(data);
   });
   req.on('end',function(){
       buffer+=decoder.end();
       console.log(buffer);
       res.json({
           buffer:buffer
        })
      
   });
}
exports.captureSendingsGet=(req,res)=>{
    let buffer='';
    req.on('data',function(data){
        buffer+=decoder.write(data);
        console.log(`BUFFER: ${buffer}`)
    });
    req.on('end',function(){
        buffer+=decoder.end();
        console.log(buffer);
        res.json({
            buffer:buffer
         })
       
    });
 }