function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
//     var result = []
    
//     for(var i = 0; i < arrPenumpang.length; i++){
//         var objct = {
//             penumpang: arrPenumpang[i][0],
//             naikDari: arrPenumpang[i][1],
//             tujuan: arrPenumpang[i][2],
//             bayar: (rute.indexOf (arrPenumpang[i][2]) - rute.indexOf (arrPenumpang[i][1])) * 2000,
//         }
//         result.push(objct)
//     } 
//     return result
//   }
  
    var result = []
    
    
    
    var totBayar = 0
        for(var i = 0; i < arrPenumpang.length; i++){
            var objek = {
                penumpang: arrPenumpang[i][0],
                naikDari: arrPenumpang[i][1],
                tujuan: arrPenumpang[i][2],
                bayar: 0
            } 
            var berangkat = 0
            var pulang = 0
            var jumlahJarak = 0
            for(var j = 0; j < rute.length; j++){
                if(rute[j] === objek.naikDari){
                    berangkat = berangkat +j
                }   
            }
            
            for(var k = 0; k < rute.length; k++){
                if(rute[k]=== objek.tujuan){
                    pulang = pulang +k
                }
            }
            jumlahJarak = pulang - berangkat
            totBayar = jumlahJarak * 2000  
            objek.bayar = totBayar   
            result.push(objek) 
            // console.log('berangkat : ' +  berangkat);
            // console.log('pulang : ' + pulang);
            // console.log('jumlah jarak : ' + jumlahJarak);
        } 
        
    

        //console.log('totBayar : ' + totBayar);
        return result
        
    }            
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]