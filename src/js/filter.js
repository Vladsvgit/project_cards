import {dataBase}  from "./api.js";
export let filterData = []
export function filter(inputPurpose, selectedStatus, selectedUrgency){
    filterData = dataBase.filter(item =>{
        if(inputPurpose && !item.title.toLowerCase().includes(inputPurpose.trim().toLowerCase())){
            return false;
        }
        if(selectedStatus !== 'all' && item.status !== selectedStatus){
            return false;
        }
        if(selectedUrgency !== 'all' && item.urgency !== selectedUrgency){
            return false;
        }
        return true;

    } );
    return filterData;
}

