// //import {dataBase}  from "./login";
//
// function filter(inputPurpose, selectedStatus, selectedUrgency){
//     let filterData = dataBase.filter(item =>{
//         if(inputPurpose.trim() && !item.title.toLowerCase().indexOf(inputPurpose.toLowerCase())){
//             return false;
//         }
//         // Добавить в функционал
//         // if(selectedStatus !== 'all' && item.status !== selectedStatus){
//         //     return false;
//         // }
//         if(selectedUrgency !== 'all' && item.urgency !== selectedUrgency){
//             return false;
//         }
//         return true;
//
//     } );
//     return filterData;
// }